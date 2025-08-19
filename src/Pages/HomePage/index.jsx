
import { HeaderComponent } from "../../components/Header"
import { Container } from "./styles"
import { HomeComponent } from "../../components/ComponentHome"
import { ServicesComponent } from "../../components/ComponentServices"
import { Vantagens } from "../../components/ComponentVantagens"
import { ComponentAgendamento } from "../../components/Agendamento"
import { Footer } from "../../components/Foooter"
export function HomePage() {

    return (


        <Container>
            < HeaderComponent />
            <HomeComponent/>
            <ServicesComponent/>
            <Vantagens/>
            <ComponentAgendamento/>
            <Footer/>
        </Container>
    )
}