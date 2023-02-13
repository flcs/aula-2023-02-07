#encoding: UTF-8
#language: pt

@informa
Funcionalidade:Funcionário informa resultado
Como um funcionário do sistema X
Fulano quer consultar o resultado que foi cadastrado

Contexto:
 Dado que "Fulano" é funcionário do sistema

@positivo
Cenário: Consulta bem sucedida
E fulano é funcionário
E precisa acessar as informações para dar o resultado,
Quando ele insere o id do trabalho e
Então é retornado o resultado daquele id.

@negativo
Esquema do Cenário: Consulta mal sucedida
E fulano é funcionário 
E precisa acessar as informações para dar o resultado,
Quando ele insere o id do trabalho
Então é retornado um erro por falta de "<status>"

Exemplos:
|status |
|<falta de permissão>|
|<id inválido>|