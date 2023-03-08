import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new shoppingcart
router.post(
  "/shoppingcarts",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.shoppingCart.create({
        data: { ...req.body },
      });

      res.json({ success: true, payload: result });
    } catch (error) {
      next(error);
    }
  }
);

// delete a shoppingcart
router.delete(
  `/shoppingcart/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const song = await prisma.shoppingCart.delete({
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

// update shoppingcarts
router.patch(
  "/shoppingcart/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const shoppingcart = await prisma.shoppingCart.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      res.json({
        success: true,
        payload: shoppingcart,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch all shoppingcarts
router.get(
  "/shoppingcarts",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const shoppingcarts = await prisma.shoppingCart.findMany({});
      res.json({
        success: true,
        payload: shoppingcarts,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch single shoppingcarts
router.get(
  "/shoppingcart/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const shoppingcarts = await prisma.shoppingCart.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json({
        success: true,
        payload: shoppingcarts,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
