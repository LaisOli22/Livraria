# Livraria

Este é um projeto de demonstração de uma API REST conectada a um banco de dados PostgreSQL para gerenciar uma coleção de livros. Os usuários podem visualizar, adicionar e gerenciar livros usando uma interface amigável. Ela foi desenvolvida utilizando TypeScript e o framework Fastify.

🚀 Tecnologias
Este projeto foi desenvolvido para portfólio com as seguintes tecnologias:

fastify

typescript

prisma

ℹ️ Executando

Para clonar e executar este projeto, execute na sua linha de comando:

# Clonando este repositório
$ git clone https://github.com/LaisOli22/Livraria.git

# Acessando o repositório
$ cd Livraria

# Instalando as dependências
$ npm install

# Configurando o banco de dados PostgreSQL com o Docker
$ docker compose up -d

# Realizando as migrações
$ npx prisma migrate dev

# Executando o app
$ npm run dev

# Testando as rotas
  1. Instale a extensão REST Client no VS Code;
  2. Abra o arquivo './src/index.http';
  3. Clique em 'Send Request' em qualquer rota.
📝 Licença
Este projeto está sob a licença MIT. Consulte a LICENÇA para obter mais informações.

by Laís Oliveira 👐🏼
