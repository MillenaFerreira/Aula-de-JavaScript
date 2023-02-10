/***************************************************************
 * Objetivo: media de nota de uma universidade
 * Autor: Millena Ferreira
 * Data: 06/02/2023
 * Versão: 1.0
 **************************************************************/

//função que irar gerar a nota e fazer a validação de si propria
const getCalcularMedia = function(nota1, nota2, nota3, nota4){

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) /4 ;


    //Tratamentos
    //validação de entrada vazia
    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        console.log('ERRO: entrada está vazia');

    //validação de letras
    }else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        console.log('ERRO: Digite número válido e não letras');

    //validação se for maior que 100
    }else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100){
        console.log('ERRO: A nota não pode ser maior que 100');

    //validação se for menor que 0
    }else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0){
        console.log('ERRO: A nota não pode ser menor que 0');

    //lógica da media
    }else{
        if(media <= 50){
            console.log(media + '\nREPROVADO');
        }else if(media >= 50 && media <= 69){
            exame()
            console.log('exame');
        }else if(media >= 70){
            console.log(media + '\nAPROVADO');
        }
    }

}



const exame = function(getCalcularMedia,notaExame){

    let exame = (getCalcularMedia + notaExame) / 2;

    if(exame <= 59){
        console.log(exame + '\nReprovado');
    }else if(exame >= 60)
        console.log(exame + '\nAprovado');
    

}
getCalcularMedia(40,45,50,60);
//exame(47, 70);

module.exports = {
    getCalcularMedia,
    exame
};

49

