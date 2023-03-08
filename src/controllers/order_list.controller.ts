import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
const redis = require("redis");
const cache = require("express-redis-cache")();

// create client with URL
const client = redis.createClient(
  "redis://default:6WoKnd5yQ36bq4kDc596@containers-us-west-201.railway.app:7546"
);
const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new order_list
router.post(
  "/order_lists",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.orderList.create({
        data: { ...req.body },
      });

      res.json({ success: true, payload: result });
    } catch (error) {
      next(error);
    }
  }
);

// delete a order_list
router.delete(
  `/order_list/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const song = await prisma.orderList.delete({
        where: { id: Number(id) },
      });
      res.json({
        success: true,
        payload: song,
      });
    } catch (error) {
      next(error);
    }
  }
);

// update order_lists
router.patch(
  "/order_list/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const order_list = await prisma.orderList.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      res.json({
        success: true,
        payload: order_list,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch all order_lists
router.get(
  "/order_lists",
  cache.route(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const order_lists = await prisma.orderList.findMany({});
      res.json({
        success: true,
        payload: order_lists,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch single order_lists
router.get(
  "/order_list/:id",
  cache.route(),
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const order_lists = await prisma.orderList.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json({
        success: true,
        payload: order_lists,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
