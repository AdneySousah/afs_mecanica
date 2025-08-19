import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Gavel, MapPinHouse, Phone, Menu, X } from 'lucide-react';
import { Container, ContainerContato, ContainerLogo, Navbar, TextLogo, NavButton, TextContato, TextEndereco, MobileMenuButton, MobileNavbar } from "./styles";

export function HeaderComponent() {
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Container>
            <ContainerLogo>
                <div className="imgLogo">
                    <Gavel size={45} />
                </div>
                <div className="textLogo">
                    <TextLogo>AFS Mecanica</TextLogo>
                    <p>conserto e locação</p>
                </div>
            </ContainerLogo>

            <Navbar>
                <NavButton to="/" $isActive={pathname === '/'}>Inicio</NavButton>
                <NavButton to="/servicos">Serviços</NavButton>
                <NavButton to="/contato">Contato</NavButton>
            </Navbar>

            <ContainerContato>
                <TextContato><Phone size={12} /> (31) 8269-6296</TextContato>
                <TextEndereco><MapPinHouse size={12} /> Sabará, MG</TextEndereco>
            </ContainerContato>

            <MobileMenuButton onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </MobileMenuButton>

            {isMenuOpen && (
                <MobileNavbar>
                    <NavButton to="/" $isActive={pathname === '/'}>Inicio</NavButton>
                    <NavButton to="/servicos">Serviços</NavButton>
                    <NavButton to="/contato">Contato</NavButton>
                </MobileNavbar>
            )}
        </Container>
    );
}