import { NextFunction, Request, Response, Router } from "express";
// import redisClient from "../utils/connectRedis";
const redis = require("redis");
export const redisClient = redis.createClient({
  url: "redis://default:6WoKnd5yQ36bq4kDc596@containers-us-west-201.railway.app:7546",
});
(async () => {
  redisClient.on("error", (error: any) => console.error(`Ups : ${error}`));
  await redisClient.connect();
})();

redisClient.on("connect", () => {
  console.log("Redis client connected");
});

redisClient.on("error", (err: any) => {
  console.log("Redis error: ", err);
});

const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { query } = req;
  const cacheKey = JSON.stringify(query);

  redisClient.get(cacheKey, (err: any, data: any) => {
    if (err) throw err;

    if (data != null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

export default cacheMiddleware;
