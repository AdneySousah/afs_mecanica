import Conserto from '../../assets/consertoGeral.png'
import Consultoria from '../../assets/ConsultoriaTecnica.png'
import Manutencao from '../../assets/manutencaoPreventiva.png'
import Reparo from '../../assets/reparoRapido.png'

export const listServices = [
    {
        id: 0,
        img:Conserto,
        title:'Conserto Geral',
        content:'Diagnóstico completo e reparo de todos os tipos de equipamentos de jardinagem.',
        list: ['Motor','Sistema elétrico', 'Peças estruturais']
    },
    {
        id: 1,
        img:Manutencao,
        title:'Manutenção Preventiva',
        content:'Revisões periódicas para manter seus equipamentos sempre funcionando perfeitamente.',
        list:['Troca de óleo','Limpeza filtros','Ajustes gerais']
    },
    {
        id: 2,
        img:Reparo,
        title:'Reparo Rápido',
        content:'Serviço expresso para reparos simples e urgentes em até 24 horas',
        list:['Atendimento rápido','Peças em estoque','Garantia expressa']
    },
    {
        id: 3,
        img:Consultoria,
        title:'Consultoria Técnica',
        content:'Orientações sobre uso correto e dicas para prolongar a vida útil dos equipamentos.',
        list:['Análise técnica','Recomendações','Suporte contínuo']

    }
]