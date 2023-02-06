/***************************************************************
 * Objetivo: Projeto para realizar calculos matématicos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Autor: Millena Ferreira
 * Data: 03/02/2023
 * Versão: 1.0
 **************************************************************/

//sempre colocar a extensao se ela foi criada por você e começar com a raiz, 
//exatamente igual se faz quando vc quer usar uma imagem no html

//Import da biblioteca da calculadora
var matematica = require('./modulo/calculadora.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

//valor 1
entradaDados.question('Valor 1: \n', function(numero1){
    //replace - metodo da classe string que localiza em caracter e subtitui por outro
    let valor1 = numero1.replace(',','.');

    //Alguns exemplos de metodos importantes da classe String
    //replace, subtring, legth, upercase, lowercase, indexof, trim(eliminar espaços de uma linha)

    //valor 2
    entradaDados.question('Valor 2: \n', function(numero2){
        
        let valor2 = numero2.replace(',','.');

        //tipo de operação matematica
        entradaDados.question('Escolha uma operação matématica: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n', function(tipoCalculado){

            let operacao = tipoCalculado.toUpperCase();

            let resultado;

            //validação de dados vazio
            if(valor1 == '' || valor2 == '' || operacao == ''){
                console.log('ERRO: Não é possivel calcular se um dado estiver em branco.');
            }else if (isNaN(valor1) || isNaN(valor2)){
                console.log('ERRO: Não é possivel calcular se os dados digitados não forem números.');
            }else{
                
                //Chama a função para calcular os valores (funções que nós criamos)
                resultado = matematica.calculadora(valor1, valor2, operacao);

                //if(resultado == false && typeof(resultado) == 'boolean'){
                if(resultado === false){

                    entradaDados.close();

                }else{

                    console.log(resultado);

                }
                               

            }


        });
    });
});
            //toUpperCase - converte uma string em MAIUSCULO
            //toLowerCase - converte uma string em MINUSCULO
            //typeof() = identifica o tipo de dados de um elemento
            // o isNaN - identifica o tipo de contéudo independente do tipo de dados
            //let x = 10;
            //console.log(typeof(x));