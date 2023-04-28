/***************************************************************
 * Objetivo: Arquivo responsavel por padronizar as mensagens de ERRO, SUCESSO, Funções, variáveis para ser utilizado no projeto
 * Autor: Millena Ferreira
 * Data: 28/04/2023
 * Versão: 1.0
 **************************************************************/

/**** MENSAGENS DE ERRO ****/
const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios nãao foram preenchidos.'};

const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor, não foi possível processar a requisição.'};


/**** MENSAGENS DE SUCESSO ****/
const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso'};


module.exports = {
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER,
    SUCCESS_CREATED_ITEM
   
}