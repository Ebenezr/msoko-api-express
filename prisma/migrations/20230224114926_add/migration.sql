/*
  Warnings:

  - You are about to drop the column `line1` on the `Address` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `county` on the `Address` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `town` on the `Address` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "line1",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
DROP COLUMN "county",
ADD COLUMN     "county" INTEGER NOT NULL,
DROP COLUMN "town",
ADD COLUMN     "town" INTEGER NOT NULL;
