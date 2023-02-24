/*
  Warnings:

  - Added the required column `shippmentFee` to the `County` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "County" ADD COLUMN     "shippmentFee" DOUBLE PRECISION NOT NULL;
