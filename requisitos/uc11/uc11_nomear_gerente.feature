#encoding: UTF-8
#language: pt

@Nomear Gerente
Funcionalidade: Nomear Gerente
    O Gerente recebe um nome
    Todo Gerente precisa de um nome

Contexto:
    Dado que "Fulano" é um gerente ele precisa de um nome

@positivo
Cenário: Gerente possui nome
    E o nome está preenchido
    Quando ele cria um gerente
    Então está correto para seguir

@negativo
Cenário: Gerente não possui nome
    E o nome não está preenchido
    Quando ele cria um gerente
    Então não está correto para seguir
