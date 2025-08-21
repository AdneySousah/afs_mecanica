import { useEffect, useState } from "react";
import Slider from "react-slick";

// Importando os estilos do carrossel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importando os componentes de estilo e a lista de equipamentos
import { ContainerEquipamentos, ContainerText, Title, Text, CarouselWrapper, EquipamentoItem } from "./styles";
import { listEquipamentos } from "./equipamentos";


export function EquipamentosComponent() {
    const [equipamentos, setEquipamentos] = useState([]);

    useEffect(() => {
        setEquipamentos(listEquipamentos);
    }, []);

    // Configurações do carrossel
    const settings = {
        dots: true,           // Mostrar pontos de navegação
        infinite: true,       // Loop infinito
        speed: 500,           // Velocidade da transição em ms
        slidesToShow: 4,      // Quantos itens mostrar de uma vez em telas grandes
        slidesToScroll: 1,    // Quantos itens rolar por vez
        autoplay: true,       // Iniciar autoplay
        autoplaySpeed: 3000,  // Velocidade do autoplay em ms
        responsive: [         // Configurações para diferentes tamanhos de tela
            {
                breakpoint: 1200, // Desktop
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,  // Tablet
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,  // Mobile
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <ContainerEquipamentos id="equipamentos">
            <ContainerText>
                <Title>Equipamentos que Trabalhamos</Title>
                <Text>Somos especialistas em uma vasta gama de equipamentos, das melhores marcas do mercado.</Text>
            </ContainerText>

            <CarouselWrapper>
                <Slider {...settings}>
                    {
                        equipamentos.map((equipamento) => (
                            <EquipamentoItem key={equipamento.id}>
                                <img src={equipamento.img} alt={equipamento.alt} />
                            </EquipamentoItem>
                        ))
                    }
                </Slider>
            </CarouselWrapper>
        </ContainerEquipamentos>
    );
}