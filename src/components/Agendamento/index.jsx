import { Button } from '../Button/'
import { instrucoes } from './instrocoes'
import { ContainerButtons, ContainerImagem, ContainerInstrucoes, ContainerTexts, Title,Text } from './styles'

export function ComponentAgendamento() {
    const phoneNumber = '5531982696296'; // Telefone com DDI do Brasil, DDD de MG e o número

    const handleCall = () => {
        window.open(`tel:${phoneNumber}`);
    };

    const handleWhatsApp = () => {
        // Formato da URL para o WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=Olá,%20gostaria%20de%20agendar%20um%20serviço.`;
        window.open(whatsappUrl, '_blank');
    };

    return(
        <ContainerImagem id='contato'>
            <ContainerTexts>
                <Title>Seu Equipamento Precisa de Conserto?</Title>
                <Text>Entre em contato conosco hoje mesmo e receba um orçamento gratuito. Nossa equipe está pronta para devolver a vida aos seus equipamentos!</Text>
            </ContainerTexts>
            <ContainerButtons>
                <Button onClick={handleCall}>Ligar Agora: (31) 9 8269-6296</Button>
                <Button onClick={handleWhatsApp} className="btnContato">Chamar no Whatsapp</Button>
            </ContainerButtons>
            <ContainerInstrucoes>
                <h1>Como Funciona</h1>
                <div className='instrucoes'>
                    {instrucoes.map((instrucao) => {
                        return (
                            <div key={instrucao.id}>
                                <span>{instrucao.passo}</span>
                                <h3>{instrucao.Title}</h3>
                                <p>{instrucao.Text}</p>
                            </div>
                        )
                    })}
                </div>
            </ContainerInstrucoes>
        </ContainerImagem>
    );
}