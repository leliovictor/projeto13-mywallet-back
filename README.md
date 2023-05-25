# projeto13-mywallet-back

Coisas para atualizar/fazer:

- Refatorar todo o código utilizando Controller, Service, Repository e etc.
- Alterar o deleteStatement, parece estar igual ao editStatement
- Banco de dados baseado em Mongo, rever como fazer as conexões no localhost para testar a refatoração
- Converter o js para typescript: Dado que está usando mongo, as funções serem tipadas pode ajudar a evitar mais erros.
- Atualizar o ReadMe explicando o projeto
- Mudar o back para o Railway - Aprender como se faz. 
- Adicionar regras de validação, schema está muito 'pobre'
- Criar um THROW para os erros, estrutura atual não está boa.
- Alterar o Token [JWT token talvez] para um token temporário ao invés de Login salvo no DB
- Rever as regras de negócio do Statement, muito pobre ainda.

- Modificar o middleware, db call precisa ser do service [regra de negocio não entra em middleware].
Adicionar a função que faz o throw error para fazer isso. [Erro handler]
- Separar um token middleware antes de tudo e associar um logout no front com ele.
