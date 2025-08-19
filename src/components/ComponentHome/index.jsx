import { HeaderComponent } from "../../components/Header"
import { ContainerButtons, ContainerCards, ContainerHome, ContainerImagem, ContainerText,Content } from "./styles"
import { Button } from "../../components/Button"
import { Phone } from "lucide-react"

export function HomeComponent() {
    return (
        <ContainerHome>
            <ContainerImagem>
                <Content>
                    <ContainerText>
                        <h1>Conserto e Manutenção de
                            <span>Equipamentos de Jardinagem</span></h1>
                        <p>Especialistas em cortadores roçadeiras, motosserras e <br />todos os equipamentos que mantêm seu jardim perfeito.</p>
                    </ContainerText>
                    <ContainerButtons>
                        <Button>Ver nossos serviços </Button>
                        <Button className="btnContato" ><Phone size={10} /> (31) 8269-6296</Button>
                    </ContainerButtons>
                    <ContainerCards>
                        <div>
                            <h1>10+</h1>
                            <p>Anos de experiencia</p>
                        </div>
                        <div>
                            <h1>100%</h1>
                            <p>Clientes satisfeitos</p>
                        </div>
                        <div>
                            <h1>500+</h1>
                            <p>Equipamentos concertados</p>
                        </div>
                    </ContainerCards>
                </Content>
            </ContainerImagem>
        </ContainerHome>
    )
}