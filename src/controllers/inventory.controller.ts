import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new inventory
router.post(
  "/inventories",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.productInventory.create({
        data: { ...req.body },
      });

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

// delete a inventory
router.delete(
  `/inventory/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const inventory = await prisma.productInventory.delete({
        where: { id: Number(id) },
      });
      res.json(inventory);
    } catch (error) {
      next(error);
    }
  }
);

// update inventories
router.patch(
  "/inventory/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const inventory = await prisma.productInventory.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      res.json(inventory);
    } catch (error) {
      next(error);
    }
  }
);

// fetch all inventories
router.get(
  "/inventories",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const inventories = await prisma.productInventory.findMany();
      res.json(inventories);
    } catch (error) {
      next(error);
    }
  }
);

// fetch single inventories
router.get(
  "/inventory/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const inventories = await prisma.productInventory.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json(inventories);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
