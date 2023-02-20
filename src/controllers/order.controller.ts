import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new order_list
router.post(
  "/orders",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.orders.create({
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
  `/orders/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const order = await prisma.orders.delete({
        where: { id: Number(id) },
      });
      res.json({
        success: true,
        payload: order,
      });
    } catch (error) {
      next(error);
    }
  }
);

// update order_lists
router.patch(
  "/orders/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const order_list = await prisma.orders.update({
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
  "/orders",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const order_lists = await prisma.orders.findMany();
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
  "/orders/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const order_lists = await prisma.orders.findUnique({
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
