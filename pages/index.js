import { Children } from 'react'
import styled from 'styled-components'
import db from '../db.json';


const BackgroundImage = styled.div ` 
background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
  `;

 export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    margin: auto 10%;
    padding-top: 45px;
    @media screen and (max-width: 500px){
      magin: auto;
      padding: 15px
    }  
 `;
// define as propriedades dos retangulos que ficam dentro do container quiz//
 const RetangulosDoQuiz = styled.div`
    margin-top : 24px;
    margin-bottom: 24px;
    border: 1px solid (${db.primary});
    background-color: #1c1814;
    border-radius: 4px;
    overflow: hidden;
`;
// function Title (props) { // <==propriedades
//   return ( <h1> 
//     {props.Children} </h1>
//   )
// }


export default function Home() {
  return(
    <BackgroundImage>
     <QuizContainer>
       <RetangulosDoQuiz>
         
      vai vendo
       </RetangulosDoQuiz>
     </QuizContainer>
    </BackgroundImage>
  );
}
