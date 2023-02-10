import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new address
router.post(
  "/addresses",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.address.create({
        data: { ...req.body },
      });

      res.json({ success: true, payload: result });
    } catch (error) {
      next(error);
    }
  }
);

// delete a address
router.delete(
  `/address/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const address = await prisma.address.delete({
        where: { id: Number(id) },
      });
      res.json({
        success: true,
        payload: address,
      });
    } catch (error) {
      next(error);
    }
  }
);

// update addresss
router.patch(
  "/address/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const address = await prisma.address.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      res.json({
        success: true,
        payload: address,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch all addresss
router.get(
  "/addresses",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const addresses = await prisma.address.findMany();
      res.json({
        success: true,
        payload: addresses,
      });
    } catch (error) {
      next(error);
    }
  }
);

// fetch single addresss
router.get(
  "/address/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const addresss = await prisma.address.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json({
        success: true,
        payload: addresss,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
