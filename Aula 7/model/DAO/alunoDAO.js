/***************************************************************
 * Objetivo: Responsavel pela manipulação de dados dos ALUNOS no Banco de Dados
 * Autor: Millena Ferreira
 * Data: 14/04/2023
 * Versão: 1.0
 **************************************************************/


//Import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client')
//instancia da classe PrismaClient
var prisma = new PrismaClient();


//Inserir dados do aluno no BD
const insert = function(dadosAluno){

}

//Atualizar um aluno existente no BD
const updateAluno = function(dadosAluno){


}

//Deletar um aluno existente no BD
const deleleAluno = function(id){


}

//Retorna a lista de todos os alunos no BD
const selectAllAlunos = async function(){


    //ScriptSQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno';

    //$queryRawUnsafe(sql) - permite interpretar uma variavel como sendo um scriptSQL
    //$queryRaw('select * from tbl_aluno') - permite interpretar o scriptSQL direto no metodo

    let rsAluno = await prisma.$queryRawUnsafe(sql);

    //valida se o banco de dados retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno;
    }else{
        return false;
    }


}

//Retorna o aluno pelo ID no BD
const selectByIdAluno = async function(id){

    let idAluno = id

    let sql = `select * from tbl_aluno where id = ${idAluno}`

    let rsAlunoId = await prisma.$queryRawUnsafe(sql);

    //valida se o banco de dados retornou algum registro
    if (rsAlunoId.length > 0) {
        return rsAlunoId;
    }else{
        return false;
    }


}

//Retorna o aluno pelo ID no nome
const selectByNameAluno = async function(name){

    let nomeAluno = name

    let sql = `select * from tbl_aluno where id like %${nomeAluno}%`

    let rsAlunoId = await prisma.$queryRawUnsafe(sql);

    //valida se o banco de dados retornou algum registro
    if (rsAlunoId.length > 0) {
        return rsAlunoId;
    }else{
        return false;
    }


}


module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNameAluno
}