import { Request, Response, NextFunction } from "express";
import redisClient from "./utils/connectRedis";
import validateEnv from "./utils/validateEnv";

import userRouter from "./controllers/user.controller";
import productRouter from "./controllers/product.controller";
import categoryRouter from "./controllers/category.controller";
import inventoryRouter from "./controllers/inventory.controller";
import discountRouter from "./controllers/discount.controller";
import orderRouter from "./controllers/order.controller";
import orderListRouter from "./controllers/order_list.controller";
import reviewsRouter from "./controllers/reviews.controller";
import addressRouter from "./controllers/address.controller";
import countyRouter from "./controllers/counties.controller";
import townRouter from "./controllers/towns.controller";

const responseTime = require("response-time");
const dotenv = require("dotenv");
const cors = require("cors");

validateEnv();
// set up swagger
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../swagger.json");

const express = require("express");
const app = express();
app.use(responseTime());

app.use(express.json());

// load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "API is running on /api" });
});
// setup cors
app.use(cors());

// routes
app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", inventoryRouter);
app.use("/api", discountRouter);
app.use("/api", orderRouter);
app.use("/api", orderListRouter);
app.use("/api", reviewsRouter);
app.use("/api", addressRouter);
app.use("/api", townRouter);
app.use("/api", countyRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () =>
  console.log(`REST API server ready at: http://localhost:${PORT}`)
);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, UPDATE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
  res.status(404);
  return res.json({
    success: false,
    payload: null,
    message: `API SAYS: Endpoint not found for path: ${req.path}`,
  });
});
