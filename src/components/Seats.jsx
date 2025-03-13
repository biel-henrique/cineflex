import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TitleMovie from "./TitleMovie";
import SeatSession from "./SeatSession";
import SeatCostumer from "./SeatCostumer";
import loading from "../assets/loading.gif"

export default function Seats() {

    const { idSessao } = useParams()
    const [seat, setSeat] = useState({})
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [idSeat, setIdSeat] = useState([])
    const [seatName, setSeatName] = useState([])
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

    const addIdSeat = (newId, itemName) => {
        setSeatName(prevState => {
            return prevState.includes(itemName)
            ? prevState.filter(item => item !== itemName)
            : [...prevState, itemName]
        })
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
            cpf: cpf,
        }

        if (!idSeat.length) {
            alert('Nenhum assento foi selecionado!')
        } else{
            axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', body)
            .then(res => 
                navigate(`/sucesso`, { state:{body, seat, seatName} })
            )
            .catch(error => console.log(error.response.data))
        }
    }

    if (!seat.id) {
        return (
            <LoadingGif>
                <img src={loading} alt="" />
            </LoadingGif>
        )
    }

    return (
        <Site>
            <TitleMovie movie={seat.movie} day={seat.day} time={seat.name}/>
            <SepTitle/>
            <Select>selecione o(s) assento(s)</Select>
            <Content>
                <SeatSession seats={seat.seats} id={idSeat} addId={addIdSeat}/>
                <Sep></Sep>
                <Form onSubmit={submitForm}>
                    <SeatCostumer name={name} setName={setName} cpf={cpf} setCpf={setCpf}/>
                    <Booking type='submit'>
                        <h1>Reservar Assento(s)</h1>
                    </Booking>
                </Form>
            </Content>
        </Site>
    )
}

const LoadingGif = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

const Site = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-top: 67px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 95%;
`

const SepTitle = styled.div`
    height: 1px;
    width: 90%;
    border-width: 1px;
    background-color: #4E5A65;
    border-radius: 1px;
`

const Select = styled.h1`
    font-size: 24px;
    color: #FFFFFF;
`

const Content = styled.div`
    width: 95%;
    gap: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Sep = styled.div`
    height: 1px;
    width: 95%;
    border-width: 1px;
    background-color: #4E5A65;
    border-radius: 1px;
`

const Booking = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
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