//Comentário em linha
/* 
    Comentário em bloco
*/

//Permite exibir no terminal uma mensagem
console.log('Testando o Node.JS');


//importar da biblioteca que permite a entrada de dados via teclado
var readline = require('readline');


//Criamos um objeto ou uma variável que vai ser especialista na entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/* 
    CallBack- Uma função de CallBack permite que na própria linha de programação seja uma váriavel,
    um processamento, a chamada de um método possa acontecer um retorno de dados automaticamente,
    sem precisar sair deste processamento.

*/

/*
    Cria uma interação com o usuario, para a entrada de dados.
    Após o usuario digitar o conteúdo, o objeto entradaDados perimite retornar o conteúdo digitado 
    para ser utilizado. Isso acontece através de uma função de CallBack
*/
entradaDados.question('Favor digitar o seu nome: \n', 
    function(nome){
        console.log('Bem Vindo, ' + nome + ' ao servidor node.JS !')
    });
