import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function FilmDate() {

    const { idFilme, Img } = useParams()
    const [session, setSession] = useState([])
    const [imgFilme, setImgFilme] = useState('')

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        .then(res => {
            console.log(res.data)
            setSession(res.data.days)
            setImgFilme(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    return (
        <>
            <Title>
                <h1>Selecione o Horário</h1>
                <img src={imgFilme.posterURL} alt="" />
            </Title>
            <Content>
                {session.map((item, index) => {
                    return (
                        <Item key={index}>
                            <h1>{item.weekday}, {item.date}</h1>
                            <Sep></Sep>
                            <Hour>
                                {item.showtimes.map((showtime, index) => {
                                    return (
                                        <div key={index}>
                                            <div>{showtime.name}</div>
                                        </div>
                                )})}
                            </Hour>
                        </Item>
                        )
                    })}
            </Content>
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

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;
    align-items: center;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 149px;
    top: 145px;
    left: 18px;
    border-radius: 8px;
    background-color: #2B2D36;

    h1 {
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
        background-color: #2B2D36;
    }
`

const Sep = styled.div`
    height: 1px;
    width: 85%;
    top: 213px;
    left: 38px;
    border-width: 1px;
    background-color: #4E5A65;
    border-radius: 1px;
`

const Hour = styled.div`
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    background-color: #2B2D36;
    border: #2B2D36;
    gap: 10px;

    div {
        display: flex;
        justify-content: center;
        color: #EE897F;
        font-size: 16px;
        align-items: center;
        background-color: #2B2D36;
        width: 84px;
        height: 41px;
        border: 2px solid #EE897F;
    }
`

