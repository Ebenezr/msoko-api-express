import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new category
router.post(
  "/categories",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.productCategory.create({
        data: { ...req.body },
      });
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

// delete a category
router.delete(
  `/category/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const category = await prisma.productCategory.delete({
        where: { id: Number(id) },
      });
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

// update categorys
router.patch(
  "/category/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const category = await prisma.productCategory.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

// fetch all categorys
router.get(
  "/categories",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categories = await prisma.productCategory.findMany({
        include: {
          products: {
            include: {
              review: true,
            },
          },
        },
      });
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }
);

// fetch single categorys
router.get(
  "/categorys/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const categories = await prisma.productCategory.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          products: true,
        },
      });
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
