import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new payment_list
router.post(
  "/payments",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.productPayment.create({
        data: { ...req.body },
      });

      res.json({ success: true, payload: result });
    } catch (error) {
      next(error);
    }
  }
);

// delete a payment_list
router.delete(
  `/payments/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const payment = await prisma.productPayment.delete({
        where: { id: Number(id) },
      });
      res.json({
        success: true,
        payload: payment,
      });
    } catch (error) {
      next(error);
    }
  }
);

// update payment_lists
router.patch(
  "/payment/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const payment_list = await prisma.productPayment.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      res.json({
        success: true,
        payload: payment_list,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch all payment_lists
router.get(
  "/payments",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payment_lists = await prisma.productPayment.findMany();
      res.json({
        success: true,
        payload: payment_lists,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch single payment_lists
router.get(
  "/payment/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const payment = await prisma.productPayment.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json({
        success: true,
        payload: payment,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
