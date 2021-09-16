/*
    Atividade I: Crie um controlador responsável por criar novos Alunos.
    O controlador deve ser capaz de:
    (  ) Cadastrar um novo aluno com nome, sobrenome.
    
    1 - função que receba parametros (nome e sobrenome);
    2 - definir os getrs e seters;
    3 - exibir os alunos cadastrados.

    (  ) Validar se o nome e sobrenome do aluno é uma string e/ou não esta vazio.

    1 - criar função que valide que o nome e sobreno são strings e não são vazias
    (usar a propiedade .length que retorna o comprimento, typeof para validar o tipo do parametro)
    
    (  ) Caso passe na validação:
        (  ) Salvar o cadastro em um arquivo json.
        OBS: usar a biblioteca fs do node.
        1 - criar o arquivo json
        2 - carregar o arquivo para o js;
        3 - converter a string do arquivo em objeto literal
        4 - adicionar o conteudo no objeto;
        5 - converter o objeto para string;
        6 - salva a string no arquivo
        
    (  ) Caso o contrário:
        (  ) Recusar o Cadastro com uma mensagem de erro.
        1 - retornar a mensagem a partir de um console.log ou alert
*/

const Student = require('./student/student.controller');

console.log('---------------------------------');

const studentOne = new Student('Raimundo', 'Neto');
const studentTwo = new Student('Salomão', 'Santos');
const studentThree = new Student('', '');

console.log('---------------------------------');

console.log('Name:', studentOne.getName());
console.log('Surname:', studentOne.getSurname());
console.log('Full name:', studentOne.getFullName());

console.log('---------------------------------');

console.log('Name:', studentTwo.getName());
console.log('Surname:', studentTwo.getSurname());
console.log('Full name:', studentTwo.getFullName());

console.log('---------------------------------');

console.log('Name:', studentThree.getName());
console.log('Surname:', studentThree.getSurname());
console.log('Full name:', studentThree.getFullName());