/***************************************************************
 * Objetivo: tabuada
 * Autor: Millena Ferreira
 * Data: 06/02/2023
 * Versão: 1.0
 **************************************************************/

// const getImparPar = function(numeroInicial, numeroFinal,opcao){
//     for(i = numeroInicial; i <= numeroFinal; i++){
//         if(opcao == 1){
//             if(i % 2 == 1)
//                 console.log(i);
//         }else if(opcao == 2){
//             if(i % 2 == 0)
//             console.log(i)
//         }else if(opcao == 3){
//             if(i % 2 == 0){
//                 console.log(i);
//             }else if(i % 2 == 1){
//                 console.log(i) 
//             }   
//         }    
//     }
// } 
//getImparPar(1, 10, 3)


function getImparPar(numeroInicio, numeroFim, opcaoEscolhida) {

    let numeroInicial = Number(numeroInicio)
    let numeroFinal = Number(numeroFim)
    let opcao = Number(opcaoEscolhida)

    if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
        console.log('ERRO: Você não digitou um número.');
    }else if (numeroInicial < 0 || numeroInicial > 500 ){
        console.log('ERRO: Você digitou um número inválido.');
    }else if (numeroFinal < 100 || numeroFinal > 1000){
        console.log('ERRO: Você digitou um número inválido.');
    }else if(numeroInicial == '' || numeroFinal == ''){
        console.log('ERRO: Você não digitou um número.');
    }else if(numeroInicial > numeroFinal){
        console.log('ERRO: número inicial deve não pode ser MAIOR que numero final.');
    }else if (numeroInicial == numeroFinal) {
        console.log('ERRO: O número inicial não pode ser igual ao número final.');
    }else if (opcao < 1 || opcao > 3) {
        console.log('ERRO: Você só pode selecionar opções de 1 á 3.');
    }
    else {

        let quantidadePar = 0;
        let quantidadeImpar = 0;
        let quantidadeTotal = 0;

        if (opcao == 1) {
            for (i = numeroInicial; i <= numeroFinal; i++) {
                if (i % 2 == 0) {
                    console.log(i);
                    quantidadePar++;
                }
            }
            console.log('A quantidade de números pares é: ' + quantidadePar);
        } else if (opcao == 2) {
            for (i = numeroInicial; i <= numeroFinal; i++) {
                if (i % 2 != 0) {
                    console.log(i);
                    quantidadeImpar++;
                }
            }
            console.log('A quantidade de números impares é: ' + quantidadeImpar);
        } else if (opcao == 3) {
            for (i = numeroInicial; i <= numeroFinal; i++) {
                if (i % 2 == 0) {
                    console.log('PAR: ' + i);
                    quantidadeTotal++;
                } else if (i % 2 != 0) {
                    console.log('IMPAR: ' + i);
                    quantidadeTotal++;
                }
            }
            console.log(quantidadeTotal);
        }
    }
}

//getImparPar(3, 10, 1);

module.exports = {
    getImparPar
}





