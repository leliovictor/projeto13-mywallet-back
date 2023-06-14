# projeto13-mywallet-back

Coisas para atualizar/fazer:

- Refatorar todo o código utilizando Controller, Service, Repository e etc.
- Alterar o deleteStatement, parece estar igual ao editStatement
- Banco de dados baseado em Mongo, rever como fazer as conexões no localhost para testar a refatoração
- Converter o js para typescript: Dado que está usando mongo, as funções serem tipadas pode ajudar a evitar mais erros.
- Atualizar o ReadMe explicando o projeto
- Mudar o back para o Railway - Aprender como se faz. 
- Adicionar regras de validação, schema está muito 'pobre' -> Juntar junto com o throw error.
- Criar um THROW para os erros, estrutura atual não está boa.
- Usar uma validação de schema genérica ao invés de chamar direto no middleware. 
- Alterar o Token [JWT token talvez] para um token temporário ao invés de Login salvo no DB
- Rever as regras de negócio do Statement, muito pobre ainda.

- Modificar o middleware, db call precisa ser do service [regra de negocio não entra em middleware].
Adicionar a função que faz o throw error para fazer isso. [Erro handler]
- Separar um token middleware antes de tudo e associar um logout no front com ele.

# MyWallet API

This API helps you to organize your financial transactions. 
This project use MongoDB as database to save/remove/edit any financial transaction that you want to store.

You can use this API with the following interface: https://github.com/leliovictor/projeto13-mywallet-front

## Technologies

  [![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/docs/)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/docs/)
  ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
  ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)


## How to run

//Reinstalar tudo localmente primeiro e fazer essa parte de uma forma mais didática. 


