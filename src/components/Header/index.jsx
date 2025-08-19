import { useState } from "react";
import { Gavel, MapPinHouse, Phone, Menu, X } from 'lucide-react';
import { Container, ContainerContato, ContainerLogo, Navbar, TextLogo, NavButton, TextContato, TextEndereco, MobileMenuButton, MobileNavbar } from "./styles";

export function HeaderComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // Novo estado para a seção ativa

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id); // Atualiza a seção ativa
            setIsMenuOpen(false); // Fecha o menu mobile após a rolagem
        }
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
                <NavButton onClick={() => scrollToSection('home')} $isActive={activeSection === 'home'}>Inicio</NavButton>
                <NavButton onClick={() => scrollToSection('servicos')} $isActive={activeSection === 'servicos'}>Serviços</NavButton>
                <NavButton onClick={() => scrollToSection('contato')} $isActive={activeSection === 'contato'}>Contato</NavButton>
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
                    <NavButton onClick={() => scrollToSection('home')} $isActive={activeSection === 'home'}>Inicio</NavButton>
                    <NavButton onClick={() => scrollToSection('servicos')} $isActive={activeSection === 'servicos'}>Serviços</NavButton>
                    <NavButton onClick={() => scrollToSection('contato')} $isActive={activeSection === 'contato'}>Contato</NavButton>
                </MobileNavbar>
            )}
        </Container>
    );
}