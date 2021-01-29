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
function QuezitoDoRetangulo ( { 
    quezito, 
    totalQuestion,
    indiceQuestion, 
    onSubmit,
} ){
    const quezitoID = `quezito__${indiceQuestion}`;
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
                      <form 
                        onSubmit= {( informacoesDoEvento ) =>{
                            informacoesDoEvento.proventDefault();
                            onSubmit();
                      }}>
                          
                        {quezito.alternatives.map((questao, indiceQuestion) => {
                            const questaoId = `questao ${indiceQuestion}`;
                            return (
                                <RetangulosDoQuiz.Topic 
                                    as = "label"
                                    htmlFor={questaoId}
                                >
                                    <input
                                        style = {{ display: 'none'}} 
                                        id = {questaoId}
                                        name= {quezitoID}
                                        type= "radio"
                                        />
                                {questao}
                                </RetangulosDoQuiz.Topic>
                            );
                        })}

                        <Button type= "submit">
                            clica ai arrombado 
                        </Button>
                        </form>  
                    </RetangulosDoQuiz.Content>
                 </RetangulosDoQuiz>
    );
}
const estadosDeCarregamentos = {
    CARREGANDO : `CARREGANDO...` ,
    PERGUNTAS : `PERGUNTAS`,
    RESULTADO : `RESULTADO`
};
export default function PaginadoQuiz () {
    const router = useRouter() ;
   
    // const estadoDeCarregamento = estadosDeCarregamentos.CARREGANDO;
    const [estadoDeCarregamento, setEstadoDeCarregamento] = React.useState (estadosDeCarregamentos.CARREGANDO);
    const totalQuestion = db.questions.length;
    const [ perguntaExibida, setPerguntaExibida] = React.useState (1);
    const indiceQuestion = perguntaExibida;
    const quezito = db.questions[indiceQuestion];
    //  o comando React.useEffect ele define o ciclo de vida de um componente
    //  inicia ou nasce == didMount
    // atualizando ou carregando == willUpdate
    // morreu ou terminou == willUnmount
    //  abaixo é definida a mudança de tela para o estado para apresentar as perguntas
    React.useEffect (() => { 
        setTimeout(() => {
        
        
        setEstadoDeCarregamento (estadosDeCarregamentos.PERGUNTAS);
        },10 * 100);
    }, []);

    function capituraSubmitQuiz () {
        const proximaPergunta = indiceQuestion + 1;
        if ( indiceQuestion < totalQuestion) {

        setPerguntaExibida(indiceQuestion + 1);
        } else {
            setEstadoDeCarregamento(estadosDeCarregamentos.RESULTADO);
        }
    };



    return (

        <FundoDoQuiz backgroundImage= {db.bg}>
            <Head><title> quem é esse pokemon</title></Head>
            <QuizContainer>
            <QuizLogo/>
                
          
            {estadoDeCarregamento === estadosDeCarregamentos.PERGUNTAS  && (  
                <QuezitoDoRetangulo 
                quezito = {quezito}
                totalQuestion = {totalQuestion} 
                indiceQuestion = {indiceQuestion}
                onSubmit = {capituraSubmitQuiz}
            />)}
            { estadoDeCarregamento === estadosDeCarregamentos.CARREGANDO &&   
                <CarregamentoRetanguloDoQuiz/> }
            </QuizContainer>
        </FundoDoQuiz>

    );
}