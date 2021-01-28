import React from 'react'
import styled from 'styled-components';


    const InputDeNome = styled.input `
        width : 100%;
        padding: 15px;
        font-size: 14px;
        border : 1px solid ${({ theme}) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.contrasText};
        background-color: ${({ theme }) => theme.colors.mainBg};
        border-radius: ${({ theme }) => theme.borderRadius};
        outline:0;
        margin-bottom:25px;
    `;

    export default function Input( {onChange, placeholder }) {
        return (
            <div>
                <InputDeNome 
                 placeholder= {placeholder}
                onChange= {onChange} />
            </div>
        );
    }

   