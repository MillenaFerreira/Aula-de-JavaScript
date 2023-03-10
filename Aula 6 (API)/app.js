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
    const estadosCidades = require('./modulo/estados_cidades.js');
    let estados = estadosCidades.getListaDeEstados();
    
    response.status(200);
    response.json(estados);

});


//
app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080.');
});



