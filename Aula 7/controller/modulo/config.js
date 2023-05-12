/***************************************************************
 * Objetivo: Arquivo responsavel por padronizar as mensagens de ERRO, SUCESSO, Funções, variáveis para ser utilizado no projeto
 * Autor: Millena Ferreira
 * Data: 28/04/2023
 * Versão: 1.0
 **************************************************************/

/******************* MENSAGENS DE ERRO ***********************/
const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos.'};

const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor, não foi possível processar a requisição.'};

const ERROR_INVALID_ID = {status: 400, message: 'O ID informado na requisição não é válido ou não foi encaminhado'}

const ERROR_INVALID_CONTENT_TYPE = {status: 415, message: 'O tipo de mídia Content-Type da solicitação não é compatível com o servidor. Tipo aceito: [application/json]'}

const ERROR_DELETE = {status: 404, message: 'Esse ID já foi excluido'};

const ERROR_NOT_FOUND = {status: 404, message: 'Nenhum item encontrado na requisição'};

/**************** MENSAGENS DE SUCESSO *********************/
const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso'};

const SUCCESS_UPDATE_ITEM = {status: 200, message: 'Item atualizado com sucesso'};

const SUCCESS_DELETE_ITEM = {status: 200, message: 'Item deletado com sucesso'};

const SUCCESS_REQUEST = {status: 200, message: 'Requisição bem sucedida!'};


module.exports = {
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER,
    ERROR_INVALID_ID,
    ERROR_INVALID_CONTENT_TYPE,
    ERROR_DELETE,
    ERROR_NOT_FOUND,
    SUCCESS_CREATED_ITEM,
    SUCCESS_UPDATE_ITEM,
    SUCCESS_DELETE_ITEM,
    SUCCESS_REQUEST   
}