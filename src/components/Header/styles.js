import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    padding: 0 20px;
    background-color: #f8f9fa; /* Adicionado para melhor visualização */

    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

export const ContainerLogo = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    .textLogo p {
        font-size: 0.7rem;
        margin: 0;
    }

    @media (max-width: 768px){
        .imgLogo{
            display: none;
        }
    }
`;

export const TextLogo = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
`;

export const Navbar = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;

    @media (max-width: 768px) {
        display: none; /* Esconde a navbar no mobile */
    }
`;

export const NavButton = styled.button`
    text-decoration: none;
    border: none;
    color: ${props => props.$isActive ? '#fff' : '#333'};
    background-color: ${props => props.$isActive ? '#15803d' : 'transparent'};
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;

    ${props => !props.$isActive && `
        &:hover {
            color: rgba(8, 129, 3, 1);
            background-color: rgba(158, 235, 71, 0.2);
        }
    `}
`;

export const ContainerContato = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    @media (max-width: 768px) {
        display: none; /* Esconde as informações de contato no mobile */
    }
`;

export const TextContato = styled.p`
    font-size: 0.8rem;
`;

export const TextEndereco = styled.p`
    font-size: 0.8rem;
`;

export const MobileMenuButton = styled.button`
    display: none; /* Esconde o botão sanduíche no desktop */
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block; /* Mostra o botão sanduíche no mobile */
        color: #333;
    }
`;

export const MobileNavbar = styled.div`
    display: none;
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #f8f9fa;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 10;
    padding: 20px;
    gap: 15px;

    ${NavButton} {
        width: 100%;
        text-align: center;
    }

    @media (max-width: 768px) {
        display: flex; /* Exibe o menu mobile quando ativo */
    }
`;