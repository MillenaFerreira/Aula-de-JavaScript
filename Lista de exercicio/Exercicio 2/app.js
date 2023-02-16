var matematica = require('./modulo/tabuada.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número da tabuada inicial: ', function (numeroInicial){
    let tabuadaInicial = numeroInicial;

    entradaDados.question('Digite o número da tabuada final: ', function (numeroFinal) {
       let tabuadaFinal = numeroFinal;

        entradaDados.question('Digite o número do contador inicial: ', function (contadorInicio) {
           let contadorInicial = contadorInicio;
        
            entradaDados.question('Digite o número do contador final: ', function (contadorFim) {
                let contadorFinal = contadorFim;
                let resultado = matematica.getTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal);
        
            });
    
        });

    });

});
