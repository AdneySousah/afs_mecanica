import styled from "styled-components";
import ContainerImg from '../../assets/containerimg.png';



export const ContainerHome = styled.div`
    margin-top: 83px;
    width: 100%;
    color: #fff;
`;

export const ContainerImagem = styled.div`
    background-image: linear-gradient(rgba(0, 100, 0, 0.4), rgba(0, 100, 0, 0.4)), url('${ContainerImg}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    min-height: 90vh; /* Usa min-height para garantir que a imagem ocupe o espaço e cresça se o conteúdo precisar */

    @media (max-width: 768px) {
        min-height: auto; /* Permite que a altura se ajuste ao conteúdo no mobile */
        padding-bottom: 20px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 50px;
    margin: 90px;

    @media (max-width: 768px) {
        margin: 40px 20px;
        gap: 30px;
    }
`;

export const ContainerText = styled.div`
h1 {
    font-size: 2.25rem;
    font-weight: bold;
    line-height: 1.25;
    margin-bottom: 1.5rem;

    span {
        color: #f97316;
        display: block;
    }
}

p {
    font-weight: 900;
    font-size: 1.3rem;
}

@media (max-width: 768px) {
    h1 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1rem;
    }
}
`;

export const ContainerButtons = styled.div`
display: flex;
gap: 20px;

.btnContato {
    background-color: #fff;
    color: #15803d;

    &:hover {
        background-color: rgba(158, 235, 71, 0.2);
        color: #fff;
        font-weight: bold;
    }
}

@media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    .btnContato, button {
        width: 100%;
    }
}
`;

export const ContainerCards = styled.div`
display: flex;
gap: 20px;

div {
    background-color: rgba(255, 255, 255, 0.2);
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    border-radius: 20px;

    h1 {
        color: #f97316;
        font-weight: bold;
        margin-bottom: 5px;
    }
}

@media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;

    div {
        width: 100%;
        height: 120px;
    }
}
`;