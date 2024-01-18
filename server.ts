import fastify from 'fastify'
import { prisma } from './lib/prisma'
import cors from '@fastify/cors'
const server = fastify()

server.register(cors);

server.get('/livros', async (request, reply) => {
    const books = await prisma.livros.findMany();
    console.log(books);
    reply.send(books)
})

server.post('/livros', async (request, reply) => {
    await prisma.livros.create({
        data:{
            titulo: req.body.titulo,
            autor: req.body.autor,
        },
    })
    reply.send({message: "./livros"});
  });

  
server.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})