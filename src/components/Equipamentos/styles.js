import styled from "styled-components";

// Container principal que define o espaçamento e a largura da seção.
export const ContainerEquipamentos = styled.div`
    margin: 150px 0;
    width: 100%;
    padding: 0 80px;
    

    @media (max-width: 768px) {
        padding: 0 20px;
        margin-top: 100px;
    }
`;

// Container para o texto de introdução (título e parágrafo).
export const ContainerText = styled.div`
    margin: 20px 0;
    text-align: center;
`;

// Estilo para o título principal da seção.
export const Title = styled.h1`
    font-weight: bold;
    font-size: 2.8rem;
    margin-bottom: 10px;
    color: #222;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

// Estilo para o parágrafo de texto abaixo do título.
export const Text = styled.p`
    font-size: 1.3rem;
    color: #333333a4;
    
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

// Wrapper para o carrossel, usado para aplicar estilos aos controles (flechas e pontos).
export const CarouselWrapper = styled.div`
    margin-top: 50px;
    padding: 0 20px; 
    padding-bottom: 20px;

    .slick-list {
        overflow: hidden !important;
     
    }

    /* Estilizando as flechas do carrossel para combinar com o design */
    .slick-prev:before,
    .slick-next:before {
        color: #15803d; 
        font-size: 28px;
        opacity: 0.8;
    }

    .slick-prev {
        left: -15px;
    }

    .slick-next {
        right: -15px;
    }

    /* Estilizando os pontos de navegação (dots) */
    .slick-dots {
        bottom: 0px; 
        
    }
    
    .slick-dots li button:before {
        font-size: 12px;
        color: #15803d;
        opacity: 0.5;
    }

    .slick-dots li.slick-active button:before {
        opacity: 1;
        color: #15803d;
    }
`;

// Estilo para cada item individual dentro do carrossel.
export const EquipamentoItem = styled.div`
    /* O padding é aplicado para criar um "gap" visual entre os slides */
    padding: 0 10px;
    
    /* ADICIONE ESTA LINHA ABAIXO */
    overflow: hidden; /* Isso remove as barras de rolagem indesejadas */
    
    img {
        width: 100%;
        height: 200px;
        object-fit: contain; /* Mostra a imagem inteira sem cortar */
        border-radius: 15px;
        background-color: #f8f9fa;
        border: 1px solid #e0e0e0;
        padding: 10px; /* Espaçamento interno para a imagem não tocar na borda */
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.05); /* Efeito de zoom sutil no hover */
        }
    }
`;