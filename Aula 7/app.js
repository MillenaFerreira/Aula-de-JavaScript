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

//end-points : retorna todos os dados de aluno
app.get('/v1/lion-school/aluno', cors(), async function(request, response){



})

//end-points : retorna o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){



})

//end-points : insere um aluno novo 
app.post('/v1/lion-school/aluno', cors(), async function(request, response){



})

//end-points : atualiza um aluno existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){



})

//end-points : exclui um aluno, filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){



})


app.listen(8080, function(){
    console.log('Agurdando requisição');
})