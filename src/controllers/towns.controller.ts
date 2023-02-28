import { NextFunction, Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
const redis = require("redis");
const cache = require("express-redis-cache")();

// create client with URL
const client = redis.createClient("redis://redis:6379");

const prisma = new PrismaClient();
const router = Router();

// ROUTES
// create new town
router.post(
  "/towns",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await prisma.town.create({
        data: { ...req.body },
      });

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

// delete a town
router.delete(
  `/town/:id`,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const towns = await prisma.town.delete({
        where: { id: Number(id) },
      });
      res.json(towns);
    } catch (error) {
      next(error);
    }
  }
);

// update towns
router.patch(
  "/town/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const town = await prisma.town.update({
        where: { id: Number(id) },
        data: { ...req.body },
      });
      res.json(town);
    } catch (error) {
      next(error);
    }
  }
);

// fetch all towns
router.get(
  "/towns",
  cache.route(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const towns = await prisma.town.findMany();
      res.json(towns);
    } catch (error) {
      next(error);
    }
  }
);

// fetch single towns
router.get(
  "/town/:id",
  cache.route(),
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const towns = await prisma.town.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json(towns);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
