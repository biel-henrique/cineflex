import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import MovieSession from "./MovieSessions"
import loading from "../assets/loading.gif"

export default function FilmDate() {

    const { idFilme } = useParams()
    const [session, setSession] = useState({})

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        .then(res => {
            setSession(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    if (!session.id) {
        return (
            <LoadingGif>
                <img src={loading} alt="" />
            </LoadingGif>
        )
    }

    return (
        <Content>
            <Title>
                <h1>Selecione o Horário</h1>
            </Title>
            <TitleImg>
                <img src={session.posterURL} alt="" />
            </TitleImg>
            <SessionList>
                <MovieSession session={session.days}/>
            </SessionList>
        </Content>
    )
}

const Content = styled.div`
    padding-top: 67px;
    display: flex;
    flex-direction: column;
`

const TitleImg = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
    img{
        width: 100px;
        height: 160px;
        top: 145px;
        left: 29px;
        border-radius: 8px;
    }   
`

const SessionList = styled.div`
    padding-top: 23px;
`

const LoadingGif = styled.div`
    display: flex;
    height: 80vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: fixed;
    top: 67;
    left: 0;
    height: 78px;
    gap: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    h1 {
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 200;
    }

    img {
        width: 100px;
        height: 160px;
        top: 145px;
        left: 29px;
        border-radius: 8px;
    }
`

