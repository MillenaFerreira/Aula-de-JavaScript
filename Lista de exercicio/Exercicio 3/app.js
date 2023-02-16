/***************************************************************
 * Objetivo: tabuada
 * Autor: Millena Ferreira
 * Data: 06/02/2023
 * Versão: 1.0
 **************************************************************/

var matematica = require('./modulo/imparPar.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número Inicial: \n', function (numeroInicio) {
    let numeroInicial = numeroInicio;

    entradaDados.question('Digite o número Final: \n', function (numeroFim) {
        let numeroFinal = numeroFim;

        console.log('1 - PAR');
        console.log('2 - IMPAR');
        console.log('3 - PAR E IMPAR');
        entradaDados.question('Digite a sua opção: ', function (opcaoEscolhida) {
            let opcao = opcaoEscolhida;

            let resultado = matematica.getImparPar(numeroInicial, numeroFinal, opcao);

        })
    })
})


