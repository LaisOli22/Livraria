-- CreateTable
CREATE TABLE "Livros" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,

    CONSTRAINT "Livros_pkey" PRIMARY KEY ("id")
);
