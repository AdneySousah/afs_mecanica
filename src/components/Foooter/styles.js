// styles.js
import styled from "styled-components";

export const ContainerPage = styled.div`
  background-color: rgba(17, 24, 39, 1);
  padding: 40px 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  /* Tablet */
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`;

export const ContainerEmpresa = styled.div``;

export const ContainerContato = styled.div``;

export const ContainerFuncionamento = styled.div``;

export const ContainerCopy = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 0.9rem;
  color: #ccc;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 10px;
  

`;

export const Text = styled.p`
  line-height: 25px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;


  /* No mobile, centraliza ícones e textos */
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
