/*
  Warnings:

  - You are about to drop the column `line2` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `station` on the `Address` table. All the data in the column will be lost.
  - Added the required column `userId` to the `OrderList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "line2",
DROP COLUMN "station",
ADD COLUMN     "default" BOOLEAN;

-- AlterTable
ALTER TABLE "OrderList" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "WishList" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "WishList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WishList" ADD CONSTRAINT "WishList_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishList" ADD CONSTRAINT "WishList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderList" ADD CONSTRAINT "OrderList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
