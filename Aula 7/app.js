/***************************************************************
 * Objetivo: API para integração entre e Back-End e Banco de Dados (GET, POST, PUT, DELETE)
 * Autor: Millena Ferreira
 * Data: 14/04/2023
 * Versão: 1.0
 **************************************************************/

//import das bibliotecas para a API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const { request, response } = require('express');

//cria o objeto app conforme a classe do express
const app = express();

//permissoes do cors
app.use((request, response, next) => {
    //define quem poderá acessar a API (* - Todos)
    response.header('Access-Control-Allow-Origin', '*');
    //define quais metodos serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    //atribui as permissoes ao cors
    app.use(cors());

    next();
});

//CRUD (create, read, update, delete)

/****************************************
    Objetivo : API de controle de ALUNOS
    Data : 14/04/2023
    Autor : Millena Ferreira
    Versão : 1.0
*****************************************/

/*
 *  INSTALAÇÃO DO PRISMA NO PROJETO (biblioteca para conexão com Banco de Dados)

 *  npm install prisma --save
 *  npx prisma
 *  npx prisma init
 *  npm install @prisma/client --save
 * 
 *  npx prisma migrate dev    #### Serve para realizar o sincronismo entre o prisma e o Banco de dados
 * 
 */




//end-points : retorna todos os dados de aluno
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

    //Import do arquivo da controller que irá solicitar a model os dados do BD
    let controllerAluno = require('./controller/controller_aluno')

    //recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getAlunos();

    //valida se existe registro de aluno
    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }

})

//end-points : retorna o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    let idAluno = request.params.id

    //Import do arquivo da controller que irá solicitar a model os dados do BD
    let controllerAluno = require('./controller/controller_aluno')

    //recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getBuscarAlunoID(idAluno);

    //valida se existe registro de aluno
    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }

})

//end-points : retorna o aluno filtrando pelo nome
app.get('/v1/lion-school/aluno/:nome', cors(), async function (request, response) {

    let nomeAluno = request.params.nome

    //Import do arquivo da controller que irá solicitar a model os dados do BD
    let controllerAluno = require('./controller/controller_aluno')

    //recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getBuscarAlunoID(nomeAluno);

    //valida se existe registro de aluno
    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }

})



//end-points : insere um aluno novo 
app.post('/v1/lion-school/aluno', cors(), async function (request, response) {



})

//end-points : atualiza um aluno existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {



})

//end-points : exclui um aluno, filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {



})


app.listen(8080, function () {
    console.log('Aguardando requisição');
})