import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import MovieSession from "./MovieSessions"

export default function FilmDate() {

    const { idFilme } = useParams()
    const [session, setSession] = useState([])

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        .then(res => {
            setSession(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    return (
        <>
            <Title>
                <h1>Selecione o Horário</h1>
                <img src={session.posterURL} alt="" />
            </Title>
            <MovieSession session={session.days}/>
        </>
    )
}

const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;

    h1 {
        color: #FFFFFF;
        font-size: 24px;
    }

    img {
        width: 145px;
        height: 210px;
        top: 145px;
        left: 29px;
        border-radius: 8px;
    }
`

