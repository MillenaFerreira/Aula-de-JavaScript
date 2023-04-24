/***************************************************************
 * Objetivo: resposavel pela regra de negocio referente ao CRUD de ALUNOS
 * Autor: Millena Ferreira
 * Data: 14/04/2023
 * Versão: 1.0
 **************************************************************/

//Inserir um novo aluno
const inserirAluno = function(dadosAluno){


}

//Atualizar um aluno existente
const atualizarAluno = function(dadosAluno){


}


//Deletar um aluno existente
const deletarAluno = function(id){


}


//Retorna a lista de todos os alunos
const getAlunos = async function(){

    let dadosAlunoJSON = {};

    //Import do arquivo DAO para acessar dados do aluno o BD
    let alunoDAO = require('../model/DAO/alunoDAO');

    //chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectAllAlunos();

    if (dadosAluno) {
        //criando um json com o atributo alunos. para emcaminhar um array de alunos
        dadosAlunoJSON.quantidade = dadosAluno.length;
        dadosAlunoJSON.alunos = dadosAluno;
        return dadosAlunoJSON;
    }else{
        return false;
    }


}

//Retorna o aluno pelo ID
const getBuscarAlunoID = async function(id){

    let idAluno = id

    let dadosAlunoJSONId = {};

    let alunoDAOId = require('../model/DAO/alunoDAO')

    let dadosAlunoId = await alunoDAOId.selectByIdAluno(idAluno);

    if (dadosAlunoId) {
        //criando um json com o atributo alunos. para emcaminhar um array de alunos
        dadosAlunoJSONId.alunos = dadosAlunoId;
        return dadosAlunoJSONId;
    }else{
        return false;
    }


}

//Retorna o aluno pelo nome
const getBuscarAlunoNome = async function(name){

    let nomeAluno = name

    let dadosAlunoJSONId = {};

    let alunoDAOId = require('../model/DAO/alunoDAO')

    let dadosAlunoId = await alunoDAOId.selectByIdAluno(nomeAluno);

    if (dadosAlunoId) {
        //criando um json com o atributo alunos. para emcaminhar um array de alunos
        dadosAlunoJSONId.alunos = dadosAlunoId;
        return dadosAlunoJSONId;
    }else{
        return false;
    }


}

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    getBuscarAlunoNome
}