import styled from "styled-components";

export const ContainerButton  = styled.button`
    padding: 20px;
    margin: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: rgba(234,88,12,1);
    color: #fff;
    font-weight: 600;
    display: inline-block;
    transition: 0.5s;

    &:hover{
        transform: scale(1.1);
        background-color: rgba(161, 63, 9, 1);
    }
`