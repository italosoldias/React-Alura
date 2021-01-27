import React from 'react'
import { Children } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from  'next/router'

 import db from '../db.json'
import RetangulosDoQuiz from '../src/componentes/retangulo/retangulo.js'
import FundoDoQuiz from '../src/componentes/FundoTela/fundoDoQuiz.js'
import QuizLogo from '../src/componentes/Quizlogo/logo.js';

import Footer from '../src/componentes/Footer/index.js'
import GitHubCorner from '../src/componentes/GithubCorner/index.js'


// const BackgroundImage = styled.div ` 
// background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
//   `;

//  export const RetangulosDoQuiz = styled.div`
//     width: 100%;
//     max-width: 350px;
//     margin: auto 10%;
//     padding-top: 45px;
//     @media screen and (max-width: 500px){
//       magin: auto;
//       padding: 15px;
//     }  
//  `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  
  const router = useRouter();
  const [name, setName] = React.useState('');
  return(
    <FundoDoQuiz backgroundImage= {db.bg}>
     <Head> <title> Quiz do Pokemon </title> </Head>
     <QuizContainer>
      <QuizLogo/>
      
       <RetangulosDoQuiz>

         {/* esse abaixo é o cabeçalho do quiz */}
         <RetangulosDoQuiz.Header>
           <h1> Pokemon</h1>
         </RetangulosDoQuiz.Header>

         {/* esse abaixo é o conteudo do retangulo */}
         <RetangulosDoQuiz.Content>

       <form onSubmit= {function (primeiroEvento) {
         primeiroEvento.preventDefault();
          // não precisa colocar a extenção do arquivo
          router.push (`/quiz?name=${name}`);
       }}
       >
         <input
          onChange = {function(primeiroEvento){
          //  name =  primeiroEvento.target.value;
          setName(primeiroEvento.target.value);
          }}
          placeholder = "conta ai pra mim" />
        <button type ="submit" disabled={name.length === 0 }>
         Jogar! 
         {name}
       </button>
       </form>
         </RetangulosDoQuiz.Content>
       </RetangulosDoQuiz>
      
      <RetangulosDoQuiz>
        {/* esse abaixo é o conteudo do retangulo */}
       <RetangulosDoQuiz.Content>
         <h1> Quizis do Git Hub</h1>

         <p>lorem bla bla bla</p>
       </RetangulosDoQuiz.Content>
      </RetangulosDoQuiz>
      <Footer />
     </QuizContainer>
     <GitHubCorner projectUrl="" />
    </FundoDoQuiz>
  );
}
