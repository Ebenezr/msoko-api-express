/*
  Warnings:

  - You are about to drop the column `discountId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_discountId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "discountId",
ADD COLUMN     "productDiscountId" INTEGER;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productDiscountId_fkey" FOREIGN KEY ("productDiscountId") REFERENCES "ProductDiscount"("id") ON DELETE SET NULL ON UPDATE CASCADE;
