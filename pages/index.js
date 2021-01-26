import { Children } from 'react'
import styled from 'styled-components'
import db from '../db.json'


import RetangulosDoQuiz from '../src/componentes/retangulo/retangulo.js'
import FundoDoQuiz from '../src/componentes/FundoTela/fundoDoQuiz.js'

import Footer from '../src/componentes/Footer/index.js'
import GitHubCorner from '../src/componentes/GithubCorner/index.js';

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

  return(
    <FundoDoQuiz backgroundImage= {db.bg}>
     <QuizContainer>

       <RetangulosDoQuiz>

         {/* esse abaixo é o cabeçalho do quiz */}
         <RetangulosDoQuiz.Header>

     <h1> Pokemon</h1>
         </RetangulosDoQuiz.Header>

         {/* esse abaixo é o conteudo do retangulo */}
         <RetangulosDoQuiz.Content>
        <p>lorem bla bla bla</p>
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
