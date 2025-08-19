import styled from "styled-components";


export const ContainerVantagens = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
background-color: #eeeeeecb;
`

export const ContainerTexts = styled.div`
padding: 20px;
`

export const Title = styled.h1`
text-align: center;
margin-bottom: 20px;
font-weight: 600;
color: #333;
`

export const Text = styled.p`
text-align: center;
font-size: 20px;
font-weight: 500;
`
export const ContainerVantagensContent = styled.div`

    display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
    gap: 2rem;
    margin-bottom: 3rem;

    div{
        
        padding: 20px;
        margin: 20px 10px;
        border-radius: 20px;
        background-color: #fff;
        width: 300px;
        height: 250px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        transition: 0.5s;
        cursor: grab;

        &:hover{
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
            
        }
    }

    h2{
        font-weight: bold;
    }
    p{
        color: #333;
    }


    /* Tablet */
@media (max-width: 900px) {
  
    
      grid-template-columns: 1fr; /* 1 coluna */
  
}



`