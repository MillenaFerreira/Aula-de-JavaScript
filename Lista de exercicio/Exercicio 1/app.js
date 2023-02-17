/***************************************************************
 * Objetivo: Interação do usuario
 * Autor: Millena Ferreira
 * Data: 10/02/2023
 * Versão: 1.0
 **************************************************************/


//Importe da biblioteca media
var calcularMedia = require('./modulo/media.js');
 
var readline = require('readline');

var entradaDados = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

//nome do aluno
entradaDados.question('Nome do Aluno: \n', function(nomeDoAluno){
    let nomeAluno = nomeDoAluno;

    //nome do professor
    entradaDados.question('Nome do Professor: \n', function(nomeDoProfessor){
        let nomeProfessor = nomeDoProfessor;

        //sexo do aluno
        entradaDados.question('Sexo do Aluno: F/M \n', function(sexoDoAluno){
            let sexoAluno = sexoDoAluno;

            //sexo do professor
            entradaDados.question('Sexo do Professor: F/M \n', function(sexoDoProfessor){
                let sexoProfessor = sexoDoProfessor;

                //nome do curso
                entradaDados.question('Nome do Curso: \n', function(nomeDoCurso){
                    let nomeCurso = nomeDoCurso;

                    //nome da disciplina
                    entradaDados.question('Nome da disciplina: \n', function(nomeDaDisciplina){
                        let nomeDisciplina = nomeDaDisciplina;

                        //nota 1
                        entradaDados.question('Digite nota 1: \n', function(nota1){
                            let primeiraNota = nota1.replace(',','.');

                            //nota 2
                            entradaDados.question('Digite nota 2: \n', function(nota2){
                                let segundaNota = nota2.replace(',','.');

                                //nota 3
                                entradaDados.question('Digite nota 3: \n', function(nota3){
                                    let terceiraNota = nota3.replace(',','.');

                                    //nota 4
                                    entradaDados.question('Digite nota 4: \n', function(nota4){
                                        let quartaNota = nota4.replace(',','.');

                                        let sexAluno = calcularMedia.sexAl(sexoAluno);
                                        let sexProfessor = calcularMedia.sexProf(sexoProfessor);

                                        let mediaAluno = calcularMedia.getCalcularMedia(nota1,nota2,nota3,nota4);
                                        console.log(mediaAluno);

                                        if(mediaAluno >= 50 && mediaAluno <= 69){
                                            console.log('O aluno precisa fazer o exame');
                                            entradaDados.question('Digite a nota do exame: \n', function(notaExame){

                                                let resultado = calcularMedia.getExame(mediaAluno, notaExame.replace(',','.'));

                                                if(resultado <= 59){
                                                    
                                                    console.log(`${sexAluno} ${nomeAluno} foi REPROVADO na disciplina ${nomeDisciplina}`);
                                                    console.log(`Curso: ${nomeCurso}`);
                                                    console.log(`${sexProfessor} : ${nomeProfessor}`);
                                                    console.log(`Notas do Aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}, ${notaExame}`);
                                                    console.log(`Média Final: ${mediaAluno}`);
                                                    console.log(`Média do Exame: ${resultado}`);


                                                }else if(resultado >= 60){

                                                    console.log(`${sexAluno} ${nomeAluno} foi APROVADO na disciplina ${nomeDisciplina}`);
                                                    console.log(`Curso: ${nomeCurso}`);
                                                    console.log(`${sexProfessor} : ${nomeProfessor}`);
                                                    console.log(`Notas do Aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}, ${notaExame}`);
                                                    console.log(`Média Final: ${mediaAluno}`);
                                                    console.log(`Média do Exame: ${resultado}`);

                                                }
                                            });

                                        }

                                        else if(mediaAluno < 50){
    
                                            console.log(`${sexAluno} ${nomeAluno} foi REPROVADO na disciplina ${nomeDisciplina}`);
                                            console.log(`Curso: ${nomeCurso}`);
                                            console.log(`${sexProfessor} : ${nomeProfessor}`);
                                            console.log(`Notas do Aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}`);
                                            console.log(`Média Final: ${mediaAluno} `);

                                        }else if(mediaAluno > 70){

                                            console.log(`${sexAluno} ${nomeAluno} foi APROVADO na disciplina ${nomeDisciplina}`);
                                            console.log(`Curso: ${nomeCurso}`);
                                            console.log(`${sexProfessor} : ${nomeProfessor}`);
                                            console.log(`Notas do Aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}`);
                                            console.log(`Média Final: ${mediaAluno} `);

                                        }
                                        

                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
