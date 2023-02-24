-- CreateTable
CREATE TABLE "County" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "County_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Town" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "countyId" INTEGER NOT NULL,

    CONSTRAINT "Town_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "County_name_key" ON "County"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Town_name_key" ON "Town"("name");

-- AddForeignKey
ALTER TABLE "Town" ADD CONSTRAINT "Town_countyId_fkey" FOREIGN KEY ("countyId") REFERENCES "County"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
