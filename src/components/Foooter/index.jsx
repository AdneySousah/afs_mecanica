import { MapPinHouse, Phone } from "lucide-react";
import { ContainerEmpresa, ContainerPage, Title, Text, ContainerContato, ContainerFuncionamento, ContainerCopy, ContainerFooter } from "./styles";


export function Footer() {
    return (

        <ContainerPage>
            <ContainerFooter>
                <ContainerEmpresa>
                    <Title>Afs mecânica e Locação</Title>
                    <Text>Especialistas em conserto e locação de equipamentos de jardinagem. Qualidade e confiança.</Text>
                </ContainerEmpresa>

                <ContainerContato>
                    <Title>Contato</Title>
                    <Text> <Phone /> (31) 8269-6296</Text>
                    
                    <Text> <MapPinHouse /> R. Santa Luzia, 2175 - Nossa Sra. de Fatima, Sabará - MG</Text>
                </ContainerContato>

                <ContainerFuncionamento>
                    <Title>Horário de Funcionamento</Title>
                    <Text>Segunda à Sexta:</Text>
                    <Text>08h às 12h e 14h às 17h</Text>
                </ContainerFuncionamento>

            </ContainerFooter>
            <ContainerCopy>
                <Text>© 2025 Afs mecânica E Locação. Todos os direitos reservados.</Text>
            </ContainerCopy>
        </ContainerPage>

    )
}