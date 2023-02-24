/*
  Warnings:

  - You are about to drop the column `shippmentFee` on the `County` table. All the data in the column will be lost.
  - Added the required column `shipmentFee` to the `County` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "County" DROP COLUMN "shippmentFee",
ADD COLUMN     "shipmentFee" DOUBLE PRECISION NOT NULL;
