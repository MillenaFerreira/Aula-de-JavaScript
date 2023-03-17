/***************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de estados e cidades
 * Autor: Millena Ferreira
 * Data: 10/03/2023
 * Versão: 1.0
 **************************************************************/

/**
 * Express - deependencia para realizar requesições de API pelo protocolo HTTP
 *       npm install express --save
 * para instalar é preciso estar dentro da pasta do projeto
 * 
 * Cors - dependencia para gerenciar permissões de requisição da API
 *       npm install cors --save
 * 
 * Body-Parser - deependencia que gerencia o corpo das requisições
 *      npm install bory-parser --save
 * 
 * npm i - vai entrar na pasta json, verifica se a algo para instalar e faz o download automaticamente
 * 
 */

//Import das dependencias do projeto

//Dependencia para criar as requisições da API
const express = require('express');

//Dependecia para gerenciar as permissões da API
const cors = require('cors');

//Dependecia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser');

//Import do arquivo modulo (funções)
const estadosCidades = require('./modulo/estados_cidades.js');

//Criar um objeto com as caracteristicas do express
const app = express();

app.use((request, response, next) => {

    //API Publica - fica disponivel para utilização de qualquer aplicação
    //API Privada - somente o ip informado poderá consumir dados da API  
                                                //tem que jogar um ip para poder ser utilizado)
                                                //Tudo que está na Api pode ser utilizado se tiver o *
    //define se a API será publica ou privada                                            
    response.header('Access-Control-Allow-Origin', '*');

    //Permite definir quais metodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Envia para o cors() as regras de permissões
    app.use(cors());

    //next serve para não encerar a API
    next();
});

//EndPoints - pontos de paradas da minha API

//async - estabelece uma status de aguarde, assim que eu processar te devolvo os dados
//OBS: se não usar o async a requisição é perdida, pois o front acha que a API está fora do ar


//EndPoints para listar todos os estados da minha API
app.get('/estados', cors(), async function(request, response, next) {

    //função que vai listar todos os estados
    let estados = estadosCidades.getListaDeEstados();
    
    
    //tratamento para validar o sucesso da requisição
    if (estados) {
        //status 200 = tudo deu certo
        response.status(200);
        response.json(estados);
    }else{
        response.status(500);
    }

    

});

//EndPoints para listar os dados do estado filtrando pela sigla do estado da minha API
app.get('/estado/sigla/:uf', cors(), async function(request, response, next) {

    let statusCode;
    let dadosEstados = {};

    //recebe a sigla do estado que será enviada pela URL da requisição
                    //params = parametro de entrada
    let siglaEstado = request.params.uf
    //console.log(siglaEstado);

    //tratamento para validação de entrada de dados incorreta
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado) )  {
        
        //response.status(400);
        statusCode = 400;
        // response.json({message: 'não foi possivel processar pois os dados de entrada (uf) que foi enviado não correspondido exibido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 digitos'});
        dadosEstados.message = 'não foi possivel processar pois os dados de entrada (uf) que foi enviado não correspondido exibido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 digitos'
    }else{
        //chama a função para retorna os dados do estado
        let estado = estadosCidades.getDadosEstado(siglaEstado);

        if (estado) {
            //response.status(200);
            //response.json(estado);
            statusCode = 200;
            dadosEstados = estado;
        }else{
            //response.status(404);
            //response.json();
            statusCode = 404;
        }
    }
    //retorna o codigo e o JSON
    response.status(statusCode);
    response.json(dadosEstados);
});

//EndPoints para listar os dados da capital de um estado do Brasil
app.get('/estadocapital/sigla/:uf', cors(), async function(request, response, next) {

    let statusCode;
    let dadosCapitalEstado = {};

    let siglaCapitalEstado = request.params.uf

    //tratamento para validação de entrada de dados incorreta
    if (siglaCapitalEstado == '' || siglaCapitalEstado == undefined || siglaCapitalEstado.length != 2 || !isNaN(siglaCapitalEstado) )  {
        
        statusCode = 400;

        dadosCapitalEstado.message = 'não foi possivel processar pois os dados de entrada (uf) que foi enviado não correspondido exibido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 digitos'
    }else{
        //chama a função para retorna os dados do estado
        let estadoCapital = estadosCidades.getCapitalEstado(siglaCapitalEstado);

        if (estadoCapital) {
            statusCode = 200;
            dadosCapitalEstado = estadoCapital;
        }else{
            statusCode = 404;
        }
    }
    //retorna o codigo e o JSON
    response.status(statusCode);
    response.json(dadosCapitalEstado);
});

//EndPoints para listar os estados de acordo com a região
app.get('/regiaoestados/regiao/:regiao', cors(), async function(request, response, next) {

    let statusCode;
    let dadosRegiaoEstado = {};

    let regiao = request.params.regiao

    if (regiao == '' || regiao == undefined || !isNaN(regiao)) {
        
        statusCode = 400;

        dadosRegiaoEstado.message = 'não foi possivel processar pois os dados de entrada (uf) que foi enviado não correspondido exibido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 digitos'

    }else{
        let regiaoEstados = estadosCidades.getEstadosRegiao(regiao)

        if (regiaoEstados) {
            statusCode = 200;
            dadosRegiaoEstado = regiaoEstados;
        }else{
            statusCode = 404;
        }

        //retorna o codigo e o JSON
        response.status(statusCode);
        response.json(dadosRegiaoEstado);
    }
});

//EndPoints para listar retorna as informações referente aos estados que formam a capital do Brasil.
app.get('/capital/', cors(), async function(request, response, next){

    let statusCode;
    let dadosCapital = {};
    let capital = estadosCidades.getCapitalPais();

    if (capital) {
        statusCode = 200;
        dadosCapital = capital;
    }else{
        statusCode = 500;
    }

    //retorna o codigo e o JSON
    response.status(statusCode);
    response.json(dadosCapital);
});

//EndPoints para listar as cidades de acordo com a sigla do estado(fazer)
app.get('/v1/cidades/estado/sigla/:uf', cors(), async function(request, response, next) {
    let statusCode
    let cidades = {};

    let siglaEstado = request.params.uf

    if(siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)){
        statusCode = 400;
        cidades.message = 'Não foi possivel processar, pois os dados de entrada (uf) que foi enviado não corrensponde ao que foi exigido. Confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos.';
    } else {
        //Chama a função para retornar os dados do estado
        let cidadesEstado = estadosCidades.getCidades(siglaEstado)

        if(cidadesEstado){
            statusCode = 200
            cidades = cidadesEstado
        } else {
            statusCode = 404
        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(cidades)
});

//Versão do professor
app.get('/v2/cidades', cors(), async function(request, response, next) {
    
    /**
     *          Existem 2 opções para receber variaveis para filtro
     * 
     *  params - permite receber a variavel na estrutura da URL
     *          criada no endPoint(geralmente utilizaco para ID (PK [chave primaria]))
     * 
     *  query - também conhecido como queryString permite receber uma ou muitas variaveis
     *          para realizar filtros mais avançados
     */

    let statusCode
    let dadosCidades = {};

    let siglaEstado = request.query.uf

    if(siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)){
        statusCode = 400;
        dadosCidades.message = 'Não foi possivel processar, pois os dados de entrada (uf) que foi enviado não corrensponde ao que foi exigido. Confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos.';
    } else {
        //Chama a função para retornar os dados do estado
        let cidadesEstado = estadosCidades.getCidades(siglaEstado);

        if(cidadesEstado){
            statusCode = 200
            dadosCidades = cidadesEstado;
        } else {
            statusCode = 404
        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(dadosCidades)

});

//Roda o serviço da API para ficar aguardando requisições
app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080.');
});

// 1º mostra qual é a versão
// 2º barra(/) = projeto ou nome da empresa ex: /senai/estados
// 3 º tipo de retorno
// 4, 5, 6, 7 ... º tipo de filtragem que o usuario irá digitar ex: /senai/cidades/sigla/:uf
//End poitns tem que fazer sentido e tem que ser padronizado, vercionar

//outro exemplo para caso tenha mais de uma variavel
//          explicação do paramentro
//                   ↧
// cidades/estados/sigla/SP(que é a uf)/populacao/20000(quantidade)