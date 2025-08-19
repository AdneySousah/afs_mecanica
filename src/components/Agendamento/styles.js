import styled from "styled-components";
import backgroungImg from '../../assets/backgroundAgendamento.png'

export const ContainerImagem = styled.div`
    background-image: linear-gradient(rgba(1, 56, 1, 0.7), rgba(1, 56, 1, 0.7)), url('${backgroungImg}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    min-height: 100vh; /* Usa min-height para se adaptar ao conteúdo */
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px; /* Adiciona padding geral para evitar que o conteúdo encoste nas bordas */
`;

export const ContainerTexts = styled.div`
    max-width: 700px;
    width: 100%;
    margin: 30px;

    @media (max-width: 768px) {
        margin: 20px;
    }
`;

export const Title = styled.h1`
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 2.5rem;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

export const Text = styled.p`
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ContainerButtons = styled.div`
    margin: 20px 0;
    display: flex;
    gap: 20px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        padding: 0 20px; /* Adiciona padding para os botões */
    }
`;

export const ContainerInstrucoes = styled.div`
    margin-top: 30px;
    width: 90%;
    
    h1 {
        margin-bottom: 20px;
        font-size: 2rem;
        
        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    .instrucoes {
        display: flex;
        gap: 20px;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(5px);
        border-radius: 20px;
        padding: 20px;
        
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 15px;
        }

        div {
            padding: 20px;
            /* height: 200px; - Removido */
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            flex: 1; /* Permite que os cards se expandam igualmente */
            
            span {
                background-color: #f97316;
                padding: 15px;
                border-radius: 100%;
                font-weight: bold;
                font-size: 1.5rem;
            }

            h3 {
                font-size: 1.2rem;
                margin: 10px 0;
            }

            p {
                font-size: 0.9rem;
            }
        }
    }
`;