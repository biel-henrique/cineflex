import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Seats() {

    const { idSessao } = useParams()
    const [seat, setSeat] = useState([])
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [idSeat, setIdSeat] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        .then(res => {
            setSeat(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const addIdSeat = (newId) => {
        setIdSeat(prevState => {
           return prevState.includes(newId) 
            ? prevState.filter(item => item !== newId)
            : [...prevState, newId]
        })
    }

    function submitForm(event) {
        event.preventDefault()
        const body = {
            ids: [...idSeat],
            name: name,
            cpf: cpf
        }

        if (!idSeat.length) {
            alert('Nenhum assento foi selecionado!')
        } else{
            axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', body)
            .then(res => 
                navigate(`/sucesso`)
            )
            .catch(error => console.log(error.response.data))
        }
    }

    return (
        <Site>
            <TitleMovie>
                <div>Filme:
                    <h1>{seat.movie?.title}</h1>
                </div>
                <div>Dia:
                    <h1>{seat.day?.weekday}, {seat.day?.date}</h1>
                </div>
                <div>Horário:
                    <h1>{seat.name}</h1>
                </div>
            </TitleMovie>
            <SepTitle></SepTitle>
            <Select>selecione o(s) assento(s)</Select>
            <Content>
                <SeatSession>
                    {seat.seats?.map((item, index) => {
                        return item.isAvailable ? (                           
                            <SeatNumber 
                            onClick={() => addIdSeat(item.id)}
                            $item={item.isAvailable} 
                            $id={item.id} 
                            $idSeat={idSeat.includes(item.id) ? true : false}
                            key={index}
                            >
                                {item.name}
                            </SeatNumber>                     
                    ) : <SeatNumberDark onClick={() => alert('Esse assento não está disponível!')} $item={item.isAvailable} key={index}></SeatNumberDark>
                })}
                </SeatSession>
                <Sep></Sep>
                <Form onSubmit={submitForm}>
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
                    <Booking type='submit'>
                        <h1>Reservar Assento(s)</h1>
                    </Booking>
                </Form>
            </Content>
        </Site>
    )
}

const Site = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;

`

const TitleMovie = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: 78px;
    width: 100vw;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;

    div {
        display: flex;
        gap: 10px;
        font-size: 24px;
        font-weight: 700;
        justify-content: flex-start;

        h1 {
            font-size: 24px;
            color: #EE897F;
        }
    }
`

const SepTitle = styled.div`
    height: 1px;
    width: 80%;
    border-width: 1px;
    background-color: #4E5A65;
    border-radius: 1px;
`

const Select = styled.h1`
    font-size: 24px;
    color: #FFFFFF;
`

const SeatSession = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 7px;
`

const Content = styled.div`
    width: 95%;
    gap: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SeatNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    top: 148px;
    left: 24px;
    border-radius: 12px;
    background-color: ${props => (
        props.$idSeat 
        ? 
        '#FADBC5'
        :
        '#9DB899'
    )};
    color: #2B2D36;
    border: ${props => (
        props.$idSeat
        ? 
        '2px solid #EE897F'
        :
        ''
    )};
    &:hover {
        cursor: pointer;
    }
`

const SeatNumberDark = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    top: 148px;
    left: 24px;
    border-radius: 12px;
    background-color: #2B2D36;
    color: #2B2D36;
`

const Sep = styled.div`
    height: 1px;
    width: 85%;
    border-width: 1px;
    background-color: #4E5A65;
    border-radius: 1px;
`

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

const Booking = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 338px;
    height: 42px;
    border-radius: 8px;
    background-color: #EE897F;

    h1 {
        color: #2B2D36;
        font-size: 18px;
        font-weight: 700;
        background-color: #EE897F;
    }
`