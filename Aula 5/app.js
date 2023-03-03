/***************************************************************
 * Objetivo: Utilizar metodos e codigos de array
 * Autor: Millena Ferreira
 * Data: 24/02/2023
 * Versão: 1.0
 **************************************************************/

// [ ] - representa um objeto do tipo array
// { } = representa um objeto do tipo JSON

const listaNomes = ['Jose', 'Maria', 'Luis', 'Antonio', 'Ana', 'Carlos'];
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memória'];

/**********************************
 * JSON é composto : chaves(atributo) e valor
 * 
 *  Chave   valor   chave       valor       chave       valor
 * {nome : 'José', celular : '1197777777', email : 'jose@gmail.com'}
 * 
 **********************************/

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

const manipulandoDados = function () {
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
    if (listaProdutos.indexOf('Teclado') >= 0) {
        console.log('Item encontrado!!');
    } else {
        console.log('Item não encontrado!!');
    }
};

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto;
    let indice = listaProdutos.indexOf(nome);
    let status;

    //splice - permite apagar um ou mais itens de um array através do indice
    // obs : se for encaminhado somente o indice ele irá apagar todos os itens a baixo dele
    // para limitar o quantidade de itens a ser apagado, devemos informar como segundo parametro(o exemplo está abaixo)
    if (indice >= 0) {
        listaProdutos.splice(indice, 1);
        status = true;
    } else {
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
    } else {
        status = false;
    }

    if (status) {
        return novosProdutos;
    } else {
        return false;
    }
};
//console.log(removerProduto2('Monitor'));


//versao professor desafio
const removerItem = function (array, nomeItem) {
    //entrada
    let nome = nomeItem;
    let novoArray = array.slice();
    let indice = novoArray.indexOf(nome);
    let status;

    //Processamento da função
    if (indice >= 0) {
        novoArray.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }
    //Saida
    if (status) { //status == true
        return novoArray;
    } else { //status == false
        return false;
    }

};
// console.log(removerItem(listaNomes, 'Maria'));
// console.table(listaNomes);


const listagemProdutos = function () {

    //Forma nº1 de criar um JSON e já atribuir chaves e valores
    // let listProdutosJSON = {
    //     produtos : listaProdutos,
    //     clientes : listaNomes
    // };

    //Forma nº2 de criar um JSON onde as cahves e valores são atribuidas no decorrer do projeto
    // let listProdutosJSON = {};

    // listProdutosJSON.produtos = listaProdutos;
    // listProdutosJSON.clientes = listaNomes;

    //Extraindo valores de um JSON e array
    // console.log(listProdutosJSON)
    // console.log(listProdutosJSON.produtos[1]);
    // console.log(listProdutosJSON.clientes[5]);

    let listProdutosJSON = {};
    let listProdutosArray = [
        {
            nome: 'Monitor',
            quantidade: 300,
            marca: 'DELL',
            valor: 1000,
            codigo: 1
        }, {
            nome: 'Monitor',
            quantidade: 280,
            marca: 'LG',
            valor: 1300,
            codigo: 2
        }, {
            nome: 'Teclado',
            quantidade: 280,
            marca: 'DELL',
            valor: 200,
            codigo: 3
        }, {
            nome: 'Teclado',
            quantidade: 360,
            marca: 'LG',
            valor: 230,
            codigo: 4
        }, {
            nome: 'Teclado',
            quantidade: 80,
            marca: 'Logitech',
            valor: 120,
            codigo: 5
        }, {
            nome: 'Teclado',
            quantidade: 100,
            marca: 'Razer',
            valor: 1230,
            codigo: 6
        }, {
            nome: 'Mouse',
            quantidade: 790,
            marca: 'DELL',
            valor: 115,
            codigo: 7
        }, {
            nome: 'Mouse',
            quantidade: 25,
            marca: 'Razer',
            valor: 800,
            codigo: 8
        }
    ];

    let listCoresDellArray = [
        'Preto',
        'Branco',
        'Cinza'
    ];
    let listCoresLgArray = [
        'Preto',
        'Cinza'
    ];
    let listCoresTecladoArray = [
        'Preto',
        'Branco',
        'Cinza',
        'Rosa',
        'Azul'
    ];
    let listCoresMouseArray = [
        'Branco',
        'Preto',
        'Azul',
        'Verde',
        'Rosa',
        'Amarelo',
        'Vermelho',
        'Roxo'
    ];


    //Array para modelos
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K', 'IPS'];
    let listModelosTeclado = ['Mecânico', 'Semi-Mecânico', 'Membrana', 'Óptico', 'IPS'];



    //Adiciona o array de produtos dentro de um JSON
    listProdutosJSON.produtos = listProdutosArray;

    //Adicionar cores ao monitor Dell
    listProdutosJSON.produtos[0].cores = listCoresDellArray;

    //Adicionar cores ao moniror LG
    listProdutosJSON.produtos[1].cores = listCoresLgArray;

    //Adicionar cores aos teclados Dell
    listProdutosJSON.produtos[2].cores = listCoresDellArray;

    //Adicionar cores aos teclados LG
    listProdutosJSON.produtos[3].cores = listCoresTecladoArray;

    //Adicionar cores aos teclados Logtech
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray;

    //Adicionar cores aos teclados razer
    listProdutosJSON.produtos[5].cores = listCoresTecladoArray;

    //Adicionar cores aos mouses Dell
    listProdutosJSON.produtos[6].cores = listCoresDellArray;

    //Adicionar cores aos mouses Razer
    listProdutosJSON.produtos[7].cores = listCoresMouseArray;



    //Adicionando os modelos aos monitores
    listProdutosJSON.produtos[0].modelos = listModelosMonitor;
    listProdutosJSON.produtos[1].modelos = listModelosMonitor;

    //Adiconando modelos aos Teclados
    listProdutosJSON.produtos[2].modelos = listModelosTeclado;
    listProdutosJSON.produtos[3].modelos = listModelosTeclado;
    listProdutosJSON.produtos[4].modelos = listModelosTeclado;
    listProdutosJSON.produtos[5].modelos = listModelosTeclado;

    // console.log(listProdutosJSON.produtos[0].modelos)

    // console.log('Nome:' + listProdutosJSON.produtos[1].nome);
    // console.log('Marca:' + listProdutosJSON.produtos[1].marca);
    // console.log('Valor:' + listProdutosJSON.produtos[1].valor);
    // console.log('Cor:' + listProdutosJSON.produtos[1].cores[1]);
    // console.log('Modelo:' + listProdutosJSON.produtos[1].modelos[1]);
    // console.log(listProdutosJSON.produtos[0]);
    // console.log(listProdutosJSON.produtos[1])


    // //Percorrendo um array com forEach
    // console.log('\nExemplo com forEach');
    // listaNomes.forEach(function (nome) {
    //     console.log(`o nome do aluno é : ${nome}`);
    // });

    //percorre o array de produtos para listar os itens
                            //para cada
    listProdutosJSON.produtos.forEach(function (itemProdutos) {
        console.log('Nome:' + itemProdutos.nome);
        console.log('Marca:' + itemProdutos.marca);
        console.log('Valor:' + itemProdutos.valor);

        //Tratamento de erro para quando não exister array de cores
        if (itemProdutos.cores != undefined) {
            //percorre o array de cores que esta dentro do array de produtos(itemProdutos)
            itemProdutos.cores.forEach(function (itemCor) {
                console.log('Cores:' + itemCor);
            });
        }

        if (itemProdutos.modelos != undefined) {
            //percorre o array de modelos que esta dentro do array de produtos(itemProdutos)
            itemProdutos.modelos.forEach(function (itemModelo) {
                console.log('Modelos:' + itemModelo);
            });
        }


        console.log('---------------------');
    });

    // for (let contador in listProdutosJSON.produtos) {
    //     console.log('Nome:' + listProdutosJSON.produtos[contador].nome);
    //     console.log('Marca:' + listProdutosJSON.produtos[contador].marca);
    //     console.log('Valor:' + listProdutosJSON.produtos[contador].valor);

    //     for (let contadorCores = 0; contadorCores < contador; contadorCores++) {
    //         console.log('Cores:' + listProdutosJSON.produtos[contadorCores].cores); 
    //     }
    //         // for(let contadorCores in listProdutosJSON.produtos){
    //         //     console.log('Cores:' + listProdutosJSON.produtos[contadorCores].cores);
    //         // }
    //         // for(let contadorModelos in listProdutosJSON.produtos){
    //         //     console.log('Modelos:' + listProdutosJSON.produtos[contadorModelos].modelos);
    //         // }

    //     console.log('--------------------------------------------')
    // }




};


listagemProdutos();

//nome
//marca
//valor
//(tem que fazer um loop para percorrer o array)todas as cores
//(tem que fazer um loop para percorrer o array)todos os modelos
