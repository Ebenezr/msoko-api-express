import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new review
router.post(
  "/reviews",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.productReview.create({
        data: { ...req.body },
      });

      res.json({ success: true, payload: result });
    } catch (error) {
      next(error);
    }
  }
);

// delete a review
router.delete(
  `/review/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const review = await prisma.productReview.delete({
        where: { id: Number(id) },
      });
      res.json({
        success: true,
        payload: review,
      });
    } catch (error) {
      next(error);
    }
  }
);

// update reviews
router.patch(
  "/review/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const review = await prisma.productReview.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      res.json({
        success: true,
        payload: review,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch all reviews
router.get(
  "/reviews",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviews = await prisma.productReview.findMany();
      res.json({
        success: true,
        payload: reviews,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch single reviews
router.get(
  "/review/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const reviews = await prisma.productReview.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json({
        success: true,
        payload: reviews,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
