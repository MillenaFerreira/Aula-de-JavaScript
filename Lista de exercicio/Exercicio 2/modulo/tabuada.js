/***************************************************************
 * Objetivo: tabuada
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
        console.log('0');
    } else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(contInicial) || isNaN(contFinal)) {
        status = false;
        console.log('String');
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

        // for( tabuadaInicial - 1 <= tabuadaFinal; tabuadaInicial++;){
        //     let minMultiplicadorContador = Number(contInicial)
        //     for( minMultiplicadorContador <= contFinal; minMultiplicadorContador++;){
        //         resultado = tabuadaInicial * minMultiplicadorContador
        //         console.log(tabuadaInicial + 'x' + minMultiplicadorContador + '=' + resultado)
        //     }
        // }
        
        // let minMultiplicadorContador
        // while(tabuadaInicial <= tabuadaFinal){
        //     minMultiplicadorContador = Number(contInicial)
        //     while(minMultiplicadorContador <= contFinal){
        //         resultado = tabuadaInicial * minMultiplicadorContador
        //         console.log(tabuadaInicial + 'x' + minMultiplicadorContador + '=' + resultado)
        //         minMultiplicadorContador++
        //     }
        //     tabuadaInicial++
        // }
    }
    return status;
};

getTabuada(4, 7, 7, 12);

module.exports = {
    getTabuada
};