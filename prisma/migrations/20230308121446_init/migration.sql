-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "image_url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductCategory" ALTER COLUMN "image_url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image_url" TEXT;
