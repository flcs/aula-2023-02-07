#encoding: UTF-8
#language: pt

@confirmar
Funcionalidade: Gerente confirmar solicitação
    Como um usuário com papel de Gerente
    Confirmar solicitação realizada pelo cliente

Contexto:
    Dado que "gerente" deseja confirmar uma solicitação criada pelo cliente

@positivo
Cenário: Solicitação confirmada
    E ele consulta lista de solicitações não processadas
    Quando ele aciona a opção solicitar confirmação
    Então o status da solicitação deve mudar para aceito

@negativo
Cenário: Não foi possível confirmar solicitação
    E ele consulta lista de solicitações não processadas
    Quando ele aciona a opção solicitar confirmação
    Então uma mensagem de erro informa erro na confirmação da solicitação