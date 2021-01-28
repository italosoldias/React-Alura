import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router';
import db from '../db.json';
import RetangulosDoQuiz from '../src/componentes/retangulo/retangulo.js'
import FundoDoQuiz from '../src/componentes/FundoTela/fundoDoQuiz.js'
import QuizContainer from '../src/componentes/Quizcontainer/quizcontainer.js'
import QuizLogo from '../src/componentes/Quizlogo/logo.js';
import Button from '../src/componentes/Buttton/button.js'
import Head from 'next/head';


function CarregamentoRetanguloDoQuiz(){
    return(
        <RetangulosDoQuiz>
            <RetangulosDoQuiz.Header>
                carregando a segunda tela
            </RetangulosDoQuiz.Header>

            <RetangulosDoQuiz.Content>
                [putz]
            </RetangulosDoQuiz.Content>
        </RetangulosDoQuiz>
    );
}
function QuezitoDoRetangulo ( { quezito, totalQuestion, indiceQuestion } ){
    return (
        <RetangulosDoQuiz>
                    <RetangulosDoQuiz.Header>

                <h1> pergunta 
                 {indiceQuestion + 1}
                 de
                 {`${totalQuestion}`}</h1>
                    </RetangulosDoQuiz.Header>

                    <img
                        alt="descrição"
                        style = {{
                            width: '100%',
                            heigth: '150px',
                            objectFit:'cover',
                        }}
                         src = {quezito.image}
                    />
                    <RetangulosDoQuiz.Content>
                        <h2>{quezito.title}</h2>
                        <p>
                        {quezito.description} 
                        </p>
                      <form>
                          
                        {quezito.alternatives.map((questao, indiceQuestion) => {
                            const questaoId = `questao ${indiceQuestion}`;
                            return (
                                <label 
                                    htmlFor={questaoId}
                                >
                                    {questao}
                                    <input
                                        id = {questaoId}
                                    />
                                </label>
                            );
                        })}
                        </form>  

                        <Button>
                            clica ai arrombado 
                        </Button>
                    </RetangulosDoQuiz.Content>
                 </RetangulosDoQuiz>
    );
}

export default function PaquinaDoQuiz () {
    const router = useRouter() ;
    const totalQuestion = db.questions.length;
    const indiceQuestion = 1;
    const quezito = db.questions[indiceQuestion];
    return (

        <FundoDoQuiz backgroundImage= {db.bg}>
            <Head><title> quem é esse pokemon</title></Head>
            <QuizContainer>
            <QuizLogo/>
                
            <QuezitoDoRetangulo 
                quezito = {quezito}
                totalQuestion = {totalQuestion} 
                indiceQuestion = {indiceQuestion}
            />
            <CarregamentoRetanguloDoQuiz/> 
            </QuizContainer>
        </FundoDoQuiz>

    );
}