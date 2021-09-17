/*
    Atividade I: Crie um controlador responsável por criar novos Alunos.
    O controlador deve ser capaz de:
    (  ) Cadastrar um novo aluno com nome, sobrenome.
    (  ) Validar se o nome e sobrenome do aluno é uma string e/ou não esta vazio.
    (  ) Caso passe na validação:
        (  ) Salvar o cadastro em um arquivo json.
    (  ) Caso o contrário:
        (  ) Recusar o Cadastro com uma mensagem de erro.
*/

var Aluno = require('./validacadastro');

var novoAluno = new Aluno(45487841,'Mendes')