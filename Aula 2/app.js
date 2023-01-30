/***************************************************************
 * Objetivo: Calcular a média de 4 notas escolares
 * Autor: Millena Ferreira
 * Data: 27/01/2023
 * Versão: 1.0
 **************************************************************/
//Import da biblioteca readline
var readline = require('readline');


//Cria o objeto para ser especialista de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * Criação de Variáveis
    * var = cria um espaço em memória de escopo global para o projeto, ou seja, 
    essa variável poderá ser utilizada em qualquer parte do arquivo(várias funções)
    * let = cria um espaço em memória de escopo local para o projeto, ou seja, 
    essa variável somente poderá ser utilizada em dentro da função que foi criada.
    * const - cria um espaço em memória de escopo local ou global para o projeto, ou seja,
    essa constante poderá ser utilizada em qualquer parte do projeto e nunca sofrerá alteração.
    O valor da const não deve ser mudado como por exemplo o PI ele é fixo e nunca muda seu valor
*/



//Função de callback para entrar o nome do aluno
entradaDados.question('Digite seu Nome: \n', function(nome){
    //Recebe o valor digitado pelo teclado
    let nomeAluno = nome;

    //Função de callback para entrar a nota1
    entradaDados.question('Digite a nota 1: \n', function(nota1){
        let valor1 = nota1;

        //Função de callback para entrar a nota2
        entradaDados.question('Digite a nota 2: \n', function(nota2){
            let valor2 = nota2;

            //Função de callback para entrar a nota3
            entradaDados.question('Digite a nota 3: \n', function(nota3){
                let valor3 = nota3;

                //Função de callback para entrar a nota4
                entradaDados.question('Digite a nota 4: \n', function(nota4){
                    let valor4 = nota4;
                    let media;

                    /*
                     Conversão de tipos de dados

                        parseInt() ou Number.parseInt() - Converte uma String em inteiro
                        parseFloat() ou Number.parseFloat()- converter uma String em real
                        Number() - converte uma String para número, conforme a entrada do valor s JavaScript define se será inteiro ou real


                    Operadores de comparação

                        == (verifica a igualdade entre conteúdos)
                        != (verifica a diferença entre conteúdos)
                        === (verifica a igualdade entre conteúdos e tipos de dados [Os dois primeiros = verificam a igualdade e o ultimo = verifica o tipo de dado])
                        !== (verifica a diferença entre  conteúdos e depois verifica se o tipo de dado é igual)
                        ==! (verifica a igualdade entre conteúdos e depois verifica se a diferença entre tipo de dados)

                            Ex:
                                0 === 0 verdadeiro
                                0 === '0' falso
                                '0' === 0 falso
                                0 === 0.0 falso
                                0 == 0 verdadeiro
                                0 == '0' verdadeiro
                                '0' == 0 verdadeiro




                        < (menor)
                        > (maior)
                        <= (menor igual)
                        >= (maior igual)
                        

                    Operadores Lógicos

                        E           &&      AND
                        OU          ||      OR
                        NEGAÇÃO     !       NOT

                    */

                    //validação para entrada vazia
                    if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){

                        console.log('ERRO: Você deixou de entrar com algum valor!!');
                    
                    //validação para a entrada de texto(inválida)
                    }else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){

                        console.log('ERRO: Você não digitou um número válido!!');

                    //validação para entrada de dados somente entre 0 e 10    
                    }else if( valor1 < 0 || valor2 < 0 || valor3 < 0|| valor4 < 0){

                        console.log('ERRO: nota menor que zero');

                    }else if ( valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){

                        console.log('ERRO: nota maior que dez');

                    }else{
                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;

                        ////exibir os dados para ver se as entradas estão funcionando corretamente
                        //console.log('Nota 1:' + valor1 + ' Nota 2:' + valor2 + ' Nota 3:' + valor3 + ' Nota 4:' + valor4);

                        //Validação se o aluno aprovou e reprovou
                        if(media <= 7){
                            console.log('Você Reprovou!!');
                        }
                        if(media >= 7){
                            console.log('Você está Aprovado!!')
                        }

                        console.log('Media do aluno: ' + media.toFixed(1));

                    }
                    
   

                });
            });
        });
    });


});