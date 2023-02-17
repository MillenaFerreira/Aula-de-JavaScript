/***************************************************************
 * Objetivo: - Criar um sistema para gerenciar o cálculo de uma tabuada
 * Autor: Millena Ferreira
 * Data: 06/02/2023
 * Versão: 1.0
 **************************************************************/

const getTabuada = function (numeroInicial, numeroFinal, contadorInicial, contadorFinal) {

    let tabuadaInicial = Number(String(numeroInicial).replace(',', '.'));
    let tabuadaFinal = Number(String(numeroFinal).replace(',', '.'));
    //start da repetição
    let contInicial = Number(String(contadorInicial).replace(',', '.'));
    let contFinal = Number(String(contadorFinal).replace(',', '.'));
    let status = true;
    let resultado;

    if (tabuadaInicial == 0 || tabuadaFinal == 0 || contInicial == 0 || contFinal == 0) {
        status = false;
        console.log('ERRO: não pode existir um valor 0');
    } else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(contInicial) || isNaN(contFinal)) {
        status = false;
        console.log('ERRO: não se pode colocar letras');
    } else if (tabuadaInicial < 2 || tabuadaInicial > 100 || tabuadaFinal < 2 || tabuadaFinal > 100) {
        status = false;
        console.log('ERRO: tabuada só pode ser entre 2 a 100');
    } else if (contInicial < 1 || contInicial > 50 || contFinal < 2 || contFinal > 50) {
        status = false;
        console.log('ERRO: contador só pode ser entre 1 a 50');
    }

    else {
        for (let cont = tabuadaInicial; cont <= tabuadaFinal; cont++) {
            console.log('\nTabuada do ' + cont);
            for (let contador = contInicial; contador <= contFinal; contador++) {
                resultado = contador * cont;
                console.log(`${cont} x ${contador} = ${resultado}`);
            }
        }
    }
    return status;
};

module.exports = {
    getTabuada
};