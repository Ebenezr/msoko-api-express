/*
  Warnings:

  - You are about to drop the column `orderId` on the `OrderList` table. All the data in the column will be lost.
  - Added the required column `cartId` to the `OrderList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `OrderList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `OrderList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `OrderList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `OrderList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotal` to the `OrderList` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CartStatus" AS ENUM ('Active', 'Saved');

-- DropForeignKey
ALTER TABLE "OrderList" DROP CONSTRAINT "OrderList_orderId_fkey";

-- AlterTable
ALTER TABLE "OrderList" DROP COLUMN "orderId",
ADD COLUMN     "cartId" INTEGER NOT NULL,
ADD COLUMN     "image_url" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "subTotal" DECIMAL(65,30) NOT NULL;

-- CreateTable
CREATE TABLE "ShoppingCart" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "CartStatus" NOT NULL,

    CONSTRAINT "ShoppingCart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderList" ADD CONSTRAINT "OrderList_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "ShoppingCart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
