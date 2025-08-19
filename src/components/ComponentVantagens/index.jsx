import { ContainerTexts, ContainerVantagens, ContainerVantagensContent,Text,Title } from "./styles";
import { vantagens } from "./vantagens";

export function Vantagens() {
    return (
        <ContainerVantagens>
            <ContainerTexts>
                <Title>Por Que Escolher a AFS Mecanica?</Title>
                <Text>Somos reconhecidos como referência em conserto de equipamentos de jardinagem na região. <br />Veja o que nos diferencia da concorrência.</Text>
            </ContainerTexts>

            <ContainerVantagensContent>
                {
                    vantagens.map((vantagem)=>{
                        return(
                            <div key={vantagem.id}>
                                <vantagem.icon color={vantagem.color} size={35}/>
                                <h2>{vantagem.title}</h2>
                                <p>{vantagem.text}</p>
                            </div>
                        )
                    })
                }

            </ContainerVantagensContent>
        </ContainerVantagens>
    )
}