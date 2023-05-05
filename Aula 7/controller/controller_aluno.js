/***************************************************************
 * Objetivo: resposavel pela regra de negocio referente ao CRUD de ALUNOS
 * Autor: Millena Ferreira
 * Data: 14/04/2023
 * Versão: 1.0
 **************************************************************/

//Import do arquivo de configurações das variaveis, constantes e funções globais
var message = require('./modulo/config.js')

//Import do arquivo DAO para acessar dados do aluno o BD
var alunoDAO = require('../model/DAO/alunoDAO');

//Inserir um novo aluno
const inserirAluno = async function (dadosAluno) {

    let resultDadosAluno;

    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if (
        dadosAluno.nome == undefined || dadosAluno.nome == '' || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == undefined || dadosAluno.rg == '' || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == undefined || dadosAluno.cpf == '' || dadosAluno.cpf.length > 20 ||
        dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == undefined || dadosAluno.email == '' || dadosAluno.email.length > 200
    ) {
        return message.ERROR_REQUIRED_FIELDS; //Status code 400
    } else {
        //Envia os dados para a model inserir no Banco de Dados
        resultDadosAluno = await alunoDAO.insertAluno(dadosAluno);

        //valida se o BD inseriu corretamente os dados
        if (resultDadosAluno) {
            return message.SUCCESS_CREATED_ITEM; //Status code 201
        } else {
            return message.ERROR_INTERNAL_SERVER //Status code 500
        }


    }

}

//Atualizar um aluno existente
const atualizarAluno = async function (dadosAluno, idAluno) {

    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if (
        dadosAluno.nome == undefined || dadosAluno.nome == '' || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == undefined || dadosAluno.rg == '' || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == undefined || dadosAluno.cpf == '' || dadosAluno.cpf.length > 20 ||
        dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == undefined || dadosAluno.email == '' || dadosAluno.email.length > 200
    ) {
        return message.ERROR_REQUIRED_FIELDS; //Status code 400
        // Validação de ID incorreto ou não informado   
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID; //Status code 400
    } else {
        //adiciona o ID do aluno no JSON dos dados
        dadosAluno.id = idAluno;

        //encaminha os dados para a model do aluno
        let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno);

        if (resultDadosAluno) {
            return message.SUCCESS_UPDATE_ITEM //Status code 200
        } else {
            return message.ERROR_INTERNAL_SERVER // Status code 500
        }
    }


}


//Deletar um aluno existente
const deletarAluno = async function (id) {

    if (id == '' || id == undefined || isNaN(id)) {
        return message.ERROR_INVALID_ID; //Status code 400
    }else{
        let resultDadosAluno = await alunoDAO.deleteAluno(id)

        if (resultDadosAluno){
            return message.SUCCESS_DELETE_ITEM //Status code 200
        }else{
            return message.ERROR_INTERNAL_SERVER // Status code 500
        }
    }

    

}


//Retorna a lista de todos os alunos
const getAlunos = async function () {

    let dadosAlunoJSON = {};

    //chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectAllAlunos();

    if (dadosAluno) {
        //criando um json com o atributo alunos. para emcaminhar um array de alunos
        dadosAlunoJSON.quantidade = dadosAluno.length;
        dadosAlunoJSON.alunos = dadosAluno;
        return dadosAlunoJSON;
    } else {
        return false;
    }


}

//Retorna o aluno pelo ID
const getBuscarAlunoID = async function (id) {

    //verificar se o aluno existe
    //404 -- já manda direto para o usuario que o id já foi deletado
    //200 -- verificar o aluno existente no banco 


    let idAluno = id

    let dadosAlunoJSONId = {};

    let dadosAlunoId = await alunoDAO.selectByIdAluno(idAluno);

    let dadosAlunoDeleteID = await alunoDAO.deleteAluno(idAluno)

    if (dadosAlunoId == 404) {
        return message.ERROR_DELETE
    } else {
        //verificar se o aluno existe no banco 
        
    }
    if (dadosAlunoId) {
        //criando um json com o atributo alunos. para emcaminhar um array de alunos
        dadosAlunoJSONId.alunos = dadosAlunoId;
        return dadosAlunoJSONId;
    } else {
        return false;
    }


}

//Retorna o aluno pelo nome
const getBuscarAlunoNome = async function (name) {

    let nomeAluno = name

    let dadosAlunoJSONNome = {};

    let dadosAlunoNome = await alunoDAO.selectByNameAluno(nomeAluno);

    if (dadosAlunoNome) {
        //criando um json com o atributo alunos. para emcaminhar um array de alunos
        dadosAlunoJSONNome.alunos = dadosAlunoNome;
        return dadosAlunoJSONNome;
    } else {
        return false;
    }


}

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    getBuscarAlunoNome,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}