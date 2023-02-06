/***************************************************************
 * Objetivo: Arquivo de funções para calculos matematicos
 * Autor: Millena Ferreira
 * Data: 03/02/2023
 * Versão: 1.0
 **************************************************************/

//função para realizar calculos matematicos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
//jeito simples de fazer uma função

//argumentos que precisam entrar na função
//Forma 1 de criar uma função (método mais tradicional)
// function calculadora(numero1, numero2, tipoCalculado) {

//     let valor1 = Number(numero1);
//     let valor2 = Number(numero2);

//     let operacao = tipoCalculado.toUpperCase();

//     let resultado;

//     let status = true;

//     if (operacao == 'SOMAR') {

//         resultado = valor1 + valor2;

//     } else if (operacao == 'SUBTRAIR') {

//         resultado = valor1 - valor2;

//     } else if (operacao == 'MULTIPLICAR') {

//         resultado = valor1 * valor2;

//     } else if (operacao == 'DIVIDIR') {

//         //Validação para tratar a divisão por zero
//         if (valor2 == 0) {
//             console.log('ERRO: Não é possivel realizar a divisão por 0.');
//             status = false;
//         } else {
//             resultado = valor1 / valor2;
//         }

//     } else {
//         console.log('ERRO: A escolha de operação matématica foi inválida!!.');

//         //finaliza o callback do objeto de entrada de dados (Sai do programa)
//         //entradaDados.close();
//         status = false;
//     }

//     // Validação para tratar qunado a variavel resultado não for processada por algum problema
//     if (resultado == undefined || status == false) {
//         return false;
//     } else {
//         return resultado;
//     }

// }


//Forma 2 de criar uma função (mais utilizado por programadores(JS))
const calculadora = function (numero1, numero2, tipoCalculado) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);

    let operacao = tipoCalculado.toUpperCase();

    let resultado;

    let status = true;

    // if (operacao == 'SOMAR') {

    //     resultado = valor1 + valor2;

    // } else if (operacao == 'SUBTRAIR') {

    //     resultado = valor1 - valor2;

    // } else if (operacao == 'MULTIPLICAR') {

    //     resultado = valor1 * valor2;

    // } else if (operacao == 'DIVIDIR') {

    //     //Validação para tratar a divisão por zero
    //     if (valor2 == 0) {
    //         console.log('ERRO: Não é possivel realizar a divisão por 0.');
    //         status = false;
    //     } else {
    //         resultado = valor1 / valor2;
    //     }

    // } else {
    //     console.log('ERRO: A escolha de operação matématica foi inválida!!.');

    //     //finaliza o callback do objeto de entrada de dados (Sai do programa)
    //     //entradaDados.close();
    //     status = false;
    // }

    switch (operacao) {

        case 'SOMAR':
            //resultado = valor1 + valor2;
            resultado = somar(valor1, valor2);
            break;

        case 'SUBTRAIR':
            //resultado = valor1 - valor2;
            resultado = subtrair(valor1, valor2);
            break;
        case 'MULTIPLICAR':
            //resultado = valor1 * valor2;
            resultado = multiplicar(valor1, valor2);
            break;
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('ERRO: Não é possivel realizar a divisão por 0.');
                status = false;
            } else {
                //resultado = valor1 / valor2;
                resultado = dividir(valor1, valor2)
            }
            break;

        //Permite entrar nesta opção, sempre que nenhum dos cases for válido
        //(como se fosse o ultimo ELSE de uma estrutura de IF)     
        default: 
            console.log('ERRO: A escolha de operação matématica foi inválida!!.');
            status = false;   
    }

    // Validação para tratar qunado a variavel resultado não for processada por algum problema
    if (resultado == undefined || status == false) {
        return false;
    } else {
        return resultado.toFixed(2);
    }
    

}


//Forma 3 de criar uma função (modelo Arrow Funcition (JS))
//                               função de seta(flexa)
const somar         = (valor1, valor2) => Number(valor1) + Number(valor2);
const subtrair      = (valor1, valor2) => Number(valor1) - Number(valor2);
const multiplicar   = (valor1, valor2) => Number(valor1) * Number(valor2);
const dividir       = (valor1, valor2) => Number(valor1) / Number(valor2);
// caso já tenha outras linhas de codigo pode se colocar {} ex:
// const dividir = (valor1, valor2) => {
//    Number(valor1) / Number(valor2);
// }



//toda função global tem que estar nesse arquivo
//Permiti adicionar uma function no escopo global (public)
//As functions que não estiverem no exports serão tratadas apenas como escopo local (private)
module.exports = {
    calculadora
}