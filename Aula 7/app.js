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


//define que os dados que irão chegar no body da requisição será no padrão JSON (isso só é utilizado no post e no delete)
const bodyParserJSON = bodyParser.json();

//Import do arquivo da controller que irá solicitar a model os dados do BD
var controllerAluno = require('./controller/controller_aluno')
var message = require('./controller/modulo/config.js');

//end-points : retorna todos os dados de aluno
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

    //recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getAlunos();

    response.status(dadosAluno.status)
    response.json(dadosAluno)

})

//end-points : retorna o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/id/:id', cors(), async function (request, response) {

    let idAluno = request.params.id

    //recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getBuscarAlunoID(idAluno);

    response.status(dadosAluno.status)
    response.json(dadosAluno)

})

//end-points : retorna o aluno filtrando pelo nome
app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function (request, response) {

    let nomeAluno = request.params.nome

    //recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getBuscarAlunoNome(nomeAluno);


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
app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function (request, response) {

    //Recebe o content-type da requisição
    let contentType = request.headers['content-type'];

    //Validação para receber dados apenas no formato JSON
    if (String(contentType).toLowerCase() === 'application/json') {
        //recebe os dados encaminhados pela requisição 
        let dadosBody = request.body;

        let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody);

        response.status(resultDadosAluno.status);
        response.json(resultDadosAluno);
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }




})

//end-points : atualiza um aluno existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJSON, async function (request, response) {

    //Recebe o content-type da requisição
    let contentType = request.headers['content-type'];

    //Validação para receber dados apenas no formato JSON
    if (String(contentType).toLowerCase() === 'application/json') {
        //Recebe o ID do aluno pelo parametro
        let idAluno = request.params.id;
        //Recebe os dados dos alunos encaminhado no corpo da requisição
        let dadosBody = request.body;

        let resultDadosAluno = await controllerAluno.atualizarAluno(dadosBody, idAluno);

        response.status(resultDadosAluno.status);
        response.json(resultDadosAluno);
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }




})

//end-points : exclui um aluno, filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {


    //Recebe o ID do aluno pelo parametro
    let idAluno = request.params.id;
    

    //trazer a controller select do aluno pelo Id
    let resultDadosAlunoID = await controllerAluno.getBuscarAlunoID(idAluno)
    

    let resultDadosAluno = await controllerAluno.deletarAluno(idAluno)

    if (resultDadosAluno) {
        response.status(resultDadosAluno.status);
        response.json(resultDadosAluno);
    } else {
        response.status(message.ERROR_INVALID_ID.status);
        response.json(message.ERROR_INVALID_ID)
    }


})


app.listen(8080, function () {
    console.log('Aguardando requisição');
})