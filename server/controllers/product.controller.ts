import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new product
router.post(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.product.create({
        data: { ...req.body },
      });

      res.json({ success: true, payload: result });
    } catch (error) {
      next(error);
    }
  }
);

// delete a product
router.delete(
  `/product/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const song = await prisma.product.delete({
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

// update products
router.patch(
  "/product/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const product = await prisma.product.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      res.json({
        success: true,
        payload: product,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch all products
router.get(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await prisma.product.findMany({
        include: { review: true },
      });
      res.json({
        success: true,
        payload: products,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch single products
router.get(
  "/product/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const products = await prisma.product.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          review: true,
        },
      });
      res.json({
        success: true,
        payload: products,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
