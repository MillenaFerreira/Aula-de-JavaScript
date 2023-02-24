/***************************************************************
 * Objetivo: Utilizar metodos e codigos de array
 * Autor: Millena Ferreira
 * Data: 24/02/2023
 * Versão: 1.0
 **************************************************************/

// [ ] - representa um objeto do tipo array
// { } = representa um objeto do tipo JSON

const listaNomes = ['Jose', 'Maria', 'Luis', 'Antonio', 'Ana', 'Carlos'];
const listaProdutos = ['Teclado', 'Mouse', 'Monitor','Gabinete','HD', 'Memória'];

const exibindoDados = function () {

    // verifica o tipo de dados do elemento listaNomes
    console.log(typeof (listaNomes));

    //verifica o tipo de dados dos itens do array
    console.log(typeof (listaNomes[0]));

    //mostra o que esta na posição 0 do array
    console.log(listaNomes[0]);

    //exibi todos os itens do array
    console.log(listaNomes);

    //permite visualizar o conteudo do array em formato de tabela
    console.table(listaNomes);

    console.log('o nome do aluno é : ' + listaNomes[0]);
    console.log(`o nome do aluno é : ${listaNomes[1]}`);


    //length - retorna a qauntidade de itens do array
    console.log(listaNomes.length);

    //Percorrendo um array com while
    console.log('\nExemplo com while');
    let cont = 0; //Start
    let qtdeItens = listaNomes.length // Stop

    while (cont < qtdeItens) {
        console.log(`o nome do aluno é : ${listaNomes[cont]}`);
        cont++;
    }

    //Percorrendo um array com for
    console.log('\nExemplo com for');

    for (let cont = 0; cont < qtdeItens; cont++) {
        console.log(`o nome do aluno é : ${listaNomes[cont]}`);
    }

    //Percorrendo um array com forEach if
    console.log('\nExemplo com forEach ( forma mais antiga )');
    for (item in listaNomes) {
        console.log(`o nome do aluno é : ${listaNomes[item]}`);
    }

    //Percorrendo um array com forEach
    console.log('\nExemplo com forEach');
    listaNomes.forEach(function (nome) {
        console.log(`o nome do aluno é : ${nome}`);
    });


};

const manipulandoDados = function(){
    //push - adiciona novos item no final do array, preservando os elementos anteriores
    listaProdutos.push('Memória');
    listaProdutos.push('Webcam', 'Gabinete', 'Fone de ouvido');
    console.table(listaProdutos);

    //unshift - adiciona novos item no inicio do array, re-organizando todos os elementos
    listaProdutos.unshift('HD', 'Placa-mãe', 'SSD')
    console.table(listaProdutos);

    //pop - remove o último item do array, preservando os elementos anteriores
    listaProdutos.pop();
    console.table(listaProdutos);

    //shift - remove o primeiro item do array, re-organizando todos os elementos
    listaProdutos.shift();
    console.table(listaProdutos);

    //slice - permite criar uma cópia do array
    const novosProdutos = listaProdutos.slice();
    console.log(novosProdutos);

    //indexOf - permite buscar dentro de um array um item
    //se o retorno for -1, o item não foi encontrado
    //se o retorno for maior ou igual a 0, o item foi encontrado e ele retorna o indice  
    console.log(listaProdutos.indexOf('Gabinete'));


    //exemplo de utilização do indexOf
    if (listaProdutos.indexOf('Teclado') >= 0 ) {
        console.log('Item encontrado!!');
    }else{
        console.log('Item não encontrado!!');
    }
};

const removerProduto = function(nomeProduto){
    let nome = nomeProduto;
    let indice = listaProdutos.indexOf(nome);
    let status;

    //splice - permite apagar um ou mais itens de um array através do indice
    // obs : se for encaminhado somente o indice ele irá apagar todos os itens a baixo dele
    // para limitar o quantidade de itens a ser apagado, devemos informar como segundo parametro(o exemplo está abaixo)
    if (indice >= 0) {
        listaProdutos.splice(indice, 1);
        status = true;
    }else{
        status = false;
    }
    return status;
    
};
// console.table(listaProdutos);
// console.log(removerProduto('Monitor'));
// console.table(listaProdutos);

const removerProduto2 = function (nomeProduto) {
    //duplicar, e tirar um item de la e devolve uma array com o
    //preservar o array de fora
    //me mostre o array com o item removido 

    // um programa deve ser dividido em 3 partes
    //entrada = onde você cria a os atributos
    //processamento de dados = onde fica a logica de tudo
    //saída = return


    let nome = nomeProduto;

    console.log('----lista oficial-----');
    console.log(listaProdutos);

    console.log('\n------copia-------');
    const novosProdutos = listaProdutos.slice();
    let indice = novosProdutos.indexOf(nome);

    console.log(novosProdutos);

    let status;

    if (indice >= 0) {
        novosProdutos.splice(indice, 1);
        status = true;

        console.log('\n---remove o item----');
        console.log(novosProdutos);
    }else{
        status = false;
    }
    
    if (status) {
        return novosProdutos;
    }else{
        return false;
    }
}
console.log(removerProduto2('Monitor'));
