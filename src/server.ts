import fastify from "fastify";
import { prisma } from "./lib/prisma";
import { Prisma } from "@prisma/client";
import cors from "@fastify/cors";
const server = fastify();

server.register(cors);

server.get("/livros", async (req, reply) => {
  try {
    const books = await prisma.livros.findMany();
    console.log(books);
    reply.send(books);
  } catch (error) {
    console.error(error);
  }
});

server.post("/livros", async (req, reply) => {
  try {
    const { titulo, autor } = req.body;
    const novoLivro = await prisma.livros.create({
      data: {
        titulo,
        autor,
      },
    });
    reply.send(novoLivro);
  } catch (error) {
    console.error(error);
  }
});

server.delete("/livros/:id", async (req, reply) => {
  try {
    const { id } = req.params;
    const livroDeletado = await prisma.livros.delete({
      where: {
        id: parseInt(id),
      },
    });
    reply.send(livroDeletado);
  } catch (error) {
    console.error(error);
  }
});

server.put("/livros/:id",async (req, reply) => {
  try{
    const { id } = request.params;
    const { titulo, autor } = req.body;
    const mudarLivro = await prisma.livros.update({
      where: {
        id: parseInt(id),
      },
      data: {
        titulo: titulo,
        autor: autor
      }
    });
    reply.send(mudarLivro);

  }catch(error){
    console.error(error);
  }
})

server.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
