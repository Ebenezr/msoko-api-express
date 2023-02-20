import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new discount
router.post(
  "/discounts",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.productDiscount.create({
        data: { ...req.body },
      });

      res.json({ success: true, payload: result });
    } catch (error) {
      next(error);
    }
  }
);

// delete a discount
router.delete(
  `/discount/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const discount = await prisma.productDiscount.delete({
        where: { id: Number(id) },
      });
      res.json({
        success: true,
        payload: discount,
      });
    } catch (error) {
      next(error);
    }
  }
);

// update discounts
router.patch(
  "/discount/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const discount = await prisma.productDiscount.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      res.json({
        success: true,
        payload: discount,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch all discounts
router.get(
  "/discounts",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const discounts = await prisma.productDiscount.findMany();
      res.json({
        success: true,
        payload: discounts,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch single discounts
router.get(
  "/discount/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const discounts = await prisma.productDiscount.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json({
        success: true,
        payload: discounts,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
