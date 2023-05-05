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
const insertAluno = async function(dadosAluno){

    //script sql para inserir dados
    let sql = `insert into tbl_aluno (
                    nome,
                    rg,
                    cpf,
                    data_nascimento,
                    email
                    )values(
                        '${dadosAluno.nome}',
                        '${dadosAluno.rg}',
                        '${dadosAluno.cpf}',
                        '${dadosAluno.data_nascimento}',
                        '${dadosAluno.email}'
                    )`;

    //executa o script no BD
    let resultStatus = await prisma.$executeRawUnsafe(sql);

    if (resultStatus) {
        return true;
    }else{
        return false;
    }

}

//Atualizar um aluno existente no BD
const updateAluno = async function(dadosAluno){

    // Script para atualizar dados
    let sql = `update tbl_aluno set
                        nome = '${dadosAluno.nome}',
                        rg = '${dadosAluno.rg}',
                        cpf = '${dadosAluno.cpf}',
                        data_nascimento = '${dadosAluno.data_nascimento}',
                        email = '${dadosAluno.email}'
                where id = ${dadosAluno.id}`;
                
    //Executa o script no BD            
    let resultStatus = await prisma.$executeRawUnsafe(sql);
    
    if (resultStatus) {
        return true;
    }else{
        return false;
    }
}

//Deletar um aluno existente no BD
const deleteAluno = async function(id){

    let sql = `delete from tbl_aluno where id = ${id}`

    let resultStatus = await prisma.$executeRawUnsafe(sql);
    
    if (resultStatus) {
        return true;
    } else {
        return false;
    }
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

//Retorna o aluno nome do aluno
const selectByNameAluno = async function(name){

    let nomeAluno = name

    let sql = `select * from tbl_aluno where nome like '%${nomeAluno}%'`

    let rsAlunoNome = await prisma.$queryRawUnsafe(sql);

    //valida se o banco de dados retornou algum registro
    if (rsAlunoNome.length > 0) {
        return rsAlunoNome;
    }else{
        return false;
    }


}


module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNameAluno,
    insertAluno,
    updateAluno,
    deleteAluno
}