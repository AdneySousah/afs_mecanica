import { ContainerAllServices, ContainerServices, ContainerText, Text, Title } from "./styles";
import { listServices } from "./services";
import { useEffect, useState } from "react";


export function ServicesComponent() {
    const [services, setServices]= useState([])

    useEffect(()=>{
        setServices(listServices)
    },[])

    return (
        <ContainerServices id="servicos">
            <ContainerText>
                <Title>Nossos Serviços</Title>
                <Text>Oferecemos soluções completas para manter seus equipamentos de jardinagem funcionando <br />com máxima eficiência e durabilidade.</Text>
            </ContainerText>
            <ContainerAllServices>
                {
                    services.map((service) => {
                        return(
                            <div className="content" key={service.id}>
                                <div className="img">
                                    <img src={service.img} alt={service.title} />
                                </div>
                                <h1>{service.title}</h1>
                                <p>{service.content}</p>
                                <ul>
                                    { 
                                        service.list.map((lista, index) =>
                                            <li key={index}>{lista}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </ContainerAllServices>
        </ContainerServices>
    )
}