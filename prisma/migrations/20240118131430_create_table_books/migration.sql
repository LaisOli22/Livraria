/*
  Warnings:

  - You are about to drop the `Livros` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Livros";

-- CreateTable
CREATE TABLE "livros" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,

    CONSTRAINT "livros_pkey" PRIMARY KEY ("id")
);
