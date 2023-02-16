/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `ProductInventory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductInventory_productId_key" ON "ProductInventory"("productId");
