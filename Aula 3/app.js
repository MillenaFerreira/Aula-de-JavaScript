/***************************************************************
 * Objetivo: fazer uma especie de calculadora
 * Autor: Millena Ferreira
 * Data: 30/01/2023
 * Versão: 1.0
 **************************************************************/

//Importar a Biblioteca
var readline = require('readline');

//Criar o objeto para ser especialista de dados do teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Pedir para o usuario escolher qual operação logica ele deseja
entradaDados.question('Escolha o número que irá representar a operação matématica \n 1-Somar \n 2-Subtrair \n 3-Multiplicar \n 4-Dividir \n',
    function (operacao) {
        let operacaoDigitada = operacao;

        //função de callback do primeiro número a ser digitado
        entradaDados.question('Digite o primeiro número da operação \n', function (numero1) {
            let primeiro = parseFloat(numero1.replace(",", "."));


            //função de callback do segundo número a ser digitado
            entradaDados.question('Digite o segundo número \n', function (numero2) {
                let segundo = parseFloat(numero2.replace(",", "."));


                //Entrada de dados vazio
                if (operacaoDigitada == '' || primeiro == '' || segundo == '') {
                    console.log('ERRO: Você deixou de entrar com algum valor!!');

                    //Entrada de caracteres inválido   
                } else if (isNaN(operacaoDigitada) || isNaN(primeiro) || isNaN(segundo)) {
                    console.log('ERRO: Você não digitou um número válido!!');

                } else if (operacaoDigitada > 4) {
                    console.log('ERRO: você escolheu uma operação inválida');
                }
                else {
                    //Somar
                    if (operacaoDigitada == 1) {
                        soma = (Number(primeiro) + Number(segundo));
                        console.log(primeiro + '+' + segundo + '=' + soma);
                    }

                    //Subtrair
                    else if (operacaoDigitada == 2) {
                        subtrair = (Number(primeiro) - Number(segundo));
                        console.log(primeiro + '-' + segundo + '=' + subtrair);
                    }

                    //Multiplicar
                    else if (operacaoDigitada == 3) {
                        multiplicar = (Number(primeiro) * Number(segundo));
                        console.log(primeiro + 'X' + segundo + '=' + multiplicar);
                    }

                    //divisão 
                    else if (operacaoDigitada == 4) {
                        if (primeiro == 0) {
                            console.log('ERRO: Impossivel fazer divisão com zero');
                        } else {
                            divisao = (Number(primeiro) / Number(segundo));
                            console.log(primeiro + '/' + segundo + '=' + divisao);
                        }

                    }
                }


            });
        });





    });

