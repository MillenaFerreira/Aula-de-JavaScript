/***************************************************************
 * Objetivo: media de nota de uma universidade
 * Autor: Millena Ferreira
 * Data: 06/02/2023
 * Versão: 1.0
 **************************************************************/

//função que irar gerar a nota e fazer a validação de si propria
const getCalcularMedia = function (nota1, nota2, nota3, nota4) {

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;

    //Tratamentos
    //validação de entrada vazia
    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log('ERRO: entrada está vazia');

        //validação de letras
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERRO: Digite número válido e não letras');

        //validação se for maior que 100
    } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log('ERRO: A nota não pode ser maior que 100');

        //validação se for menor que 0
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        console.log('ERRO: A nota não pode ser menor que 0');

        //lógica da media
    } else {
        if (media <= 50) {
            return media;
        } else if (media >= 50 && media <= 69) {
            getExame()
            return media;
        } else if (media >= 70) {
            return media;
        }
    }

}


const getExame = function (mediaAluno, notaExame) {

    let exame = (Number(mediaAluno) + Number(notaExame)) / 2;

    if (exame == '') {
        console.log('ERRO: entrada está vazia');
    } else if (isNaN(exame)) {
        console.log('ERRO: Digite número válido e não letras');
    } else if (exame > 100) {
        console.log('ERRO: A nota não pode ser maior que 100');
    } else if (exame < 0) {
        console.log('ERRO: A nota não pode ser menor que 0');
    } else {
        if (exame <= 59) {
            return exame;
        } else if (exame >= 60)
            return exame;
    }
}

const sexAl = function (sexoAluno) {

    if (sexoAluno == '') {

    } else {
        if (sexoAluno == 'f' || sexoAluno == 'F' ) {
            return 'A Aluna'
        } else {
            return 'O Aluno'
        }
    }


}

const sexProf = function (sexoProfessor) {

    if (sexoProfessor == 'f' || sexoProfessor == 'F') {
        return 'Professora'
    } else {
        return 'Professor'
    }

}

module.exports = {
    getCalcularMedia,
    getExame,
    sexAl,
    sexProf
};



