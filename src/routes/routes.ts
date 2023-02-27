import { Router } from "express";

import userRouter from "../controllers/user.controller";
import productRouter from "../controllers/product.controller";
import categoryRouter from "../controllers/category.controller";
import inventoryRouter from "../controllers/inventory.controller";
import discountRouter from "../controllers/discount.controller";
import orderRouter from "../controllers/order.controller";
import orderListRouter from "../controllers/order_list.controller";
import reviewsRouter from "../controllers/reviews.controller";
import addressRouter from "../controllers/address.controller";
import countyRouter from "../controllers/counties.controller";
import townRouter from "../controllers/towns.controller";

const router = Router();

// sub routes
router.use("/api", userRouter);
router.use("/api", productRouter);
router.use("/api", categoryRouter);
router.use("/api", inventoryRouter);
router.use("/api", discountRouter);
router.use("/api", orderRouter);
router.use("/api", orderListRouter);
router.use("/api", reviewsRouter);
router.use("/api", addressRouter);
router.use("/api", townRouter);
router.use("/api", countyRouter);

export default router;
