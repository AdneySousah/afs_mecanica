import styled from "styled-components";

export const ContainerServices = styled.div`
margin-top: 150px;
    width: 100%;
    padding: 0 80px;

    @media (max-width: 768px) {
        padding: 0 20px;
       
    }
`;

export const ContainerText = styled.div`
    margin: 20px 0;
    text-align: center;
    
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 2.8rem;
    margin-bottom: 10px;
    color: #222;

    @media (max-width: 768px) {
        font-size: 2rem;
        
    }
`;

export const Text = styled.p`
    font-size: 1.3rem;
    color: #333333a4;
    
    br {
      display: block;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
       
        br {
          display: none; /* remove a quebra de linha no mobile */
        }
    }
`;

export const ContainerAllServices = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;

    .content {
        margin-top: 50px;
        border: 2px solid #15803d;
        border-radius: 20px;
        /* height: 400px; - Removido para que a altura seja dinâmica */
        transition: 0.5s ease-in-out;
        
        &:hover {
            transform: translateY(-10px);
            box-shadow: 0 0 10px #15803d;
        }
    }

    .img {
        overflow: hidden;
        border-radius: 20px 20px 0 0; /* Ajusta o border-radius da imagem */
    }

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        transition: 0.5s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    h1 {
        padding: 20px; /* Unificado o padding */
        font-size: 1.8rem;
        font-weight: 600;

        @media (max-width: 768px) {
            font-size: 1.5rem;
            padding: 15px;
        }
    }

    p {
        padding: 0 20px 20px; /* Unificado o padding e ajustado para não ter padding superior */
        color: #333;
        font-weight: 300;

        @media (max-width: 768px) {
            font-size: 0.9rem;
            padding: 0 15px 15px;
        }
    }

    li {
        padding-top: 10px; /* Ajustado para um espaçamento menor */
        padding-left: 20px;
        margin-bottom: 20px;
    }

    /* Tablet */
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    /* Desktop */
    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;