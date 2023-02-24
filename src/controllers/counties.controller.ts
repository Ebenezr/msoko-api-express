import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new county
router.post(
  "/countys",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.county.create({
        data: { ...req.body },
      });

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

// delete a county
router.delete(
  `/county/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const countys = await prisma.county.delete({
        where: { id: Number(id) },
      });
      res.json(countys);
    } catch (error) {
      next(error);
    }
  }
);

// update countys
router.patch(
  "/county/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const county = await prisma.county.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      res.json(county);
    } catch (error) {
      next(error);
    }
  }
);

// fetch all countys
router.get(
  "/countys",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const countys = await prisma.county.findMany({
        include: { Town: true },
      });
      res.json(countys);
    } catch (error) {
      next(error);
    }
  }
);

// fetch single countys
router.get(
  "/county/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const countys = await prisma.county.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          Town: true,
        },
      });
      res.json(countys);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
