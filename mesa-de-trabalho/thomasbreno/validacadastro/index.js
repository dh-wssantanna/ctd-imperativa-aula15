const fs = require('fs');

const bancoDeDados = fs.readFileSync(__dirname + '/bancodedados.json', 'utf-8');

const bancoDeDadosObjeto = JSON.parse(bancoDeDados)

var Aluno = function(nome,sobrenome){
    var nome = nome;
    var sobrenome = sobrenome;

    if(nome != '' && typeof(nome)=='string' && sobrenome != '' && typeof(sobrenome)=='string'){

        bancoDeDadosObjeto.push({
            nome,
            sobrenome
        })

        const dadosEmJson = JSON.stringify(bancoDeDadosObjeto);
        
        fs.writeFileSync(__dirname + '/bancodedados.json', dadosEmJson);

    }else{
        console.log('Nome e/ou sobrenome inválidos')
    }   
}
module.exports = Aluno;