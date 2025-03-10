import styled from "styled-components"

export default function SeatCostumer({name, setName, cpf, setCpf}) {

    return (
        <Costumer>
            <CostumerData>
                <label htmlFor='name'>Nome do Comprador(a)</label>
                <input 
                value={name}
                onChange={e => setName(e.target.value)}
                id='name' 
                type="text" 
                placeholder="Digite seu nome" 
                required/>
            </CostumerData>
            <CostumerData>
                <label htmlFor='cpf'>CPF do Comprador(a)</label>
                <input
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                id='cpf'
                type="text" 
                placeholder="Digite seu cpf"
                required/>
            </CostumerData>
        </Costumer>
    )
}

const Costumer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const CostumerData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    label { 
        font-size: 16px;
        color: #FFFFFF;
    }

    input {
        border: 1px solid #D4D4D4;
        width: 338px;
        height: 40px;
        border-radius: 8px;
        border-width: 1px;
        background-color: #FFFFFF;
        padding: 10px;
    }
`