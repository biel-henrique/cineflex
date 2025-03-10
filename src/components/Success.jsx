import axios from "axios"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import loading from "../assets/loading.gif"

export default function Success() {

    const { state: {body, seat, seatName} } = useLocation()
    const navigate = useNavigate()

    if (!seat.id) {
        return (
            <LoadingGif>
                <img src={loading} alt="" />
            </LoadingGif>
        )
    }


    return (
        <>
            <TitleMovie>
                <h1>Pedido finalizado!</h1>
            </TitleMovie>
            <Content>
                <MovieDetail>
                    <Title1>
                        <div>
                            <h1>Filme e Sessão</h1>
                        </div>
                    </Title1>
                    <Sep></Sep>
                    <FilmData>
                        <div>
                            <h1>{seat.movie.title}</h1>
                            <h1>{seat.day.date}, {seat.name}</h1>
                        </div>
                    </FilmData>
                    <Title>
                        <div>
                            <h1>Ingressos</h1>
                        </div>
                    </Title>
                    <Sep></Sep>
                    <FilmData>
                        <div>
                            {seatName.map((item, index) => (
                                <h1 key={index}>Assento {item}</h1>
                            ))}  
                        </div>
                    </FilmData>
                    <Title>
                        <div>
                            <h1>Comprador(a)</h1>
                        </div>
                    </Title>
                    <Sep></Sep>
                    <FilmData1>
                        <div>
                            <h1>Nome:&nbsp;&nbsp;{body.name}</h1>
                            <h1>Cpf:&nbsp;&nbsp;{body.cpf}</h1>
                        </div>
                    </FilmData1>
                </MovieDetail>
                <FinishButton onClick={() => navigate('/')} type='subimit'>
                    <h1>Voltar para a tela inicial!</h1>
                </FinishButton>
            </Content>
        </>
    )
}

const LoadingGif = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

const TitleMovie = styled.div`
    font-size: 10px;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h1 {
        font-size: 24px;
        color: #9DB899;
    }
`

const Title = styled.div`
    width: 90%;
    h1 {
        color: #EE897F;
        font-size: 22px;
        background-color: #2B2D36;
    }
`

const Title1 = styled.div`
    width: 90%;
    margin-top: 20px;
    h1 {
        color: #EE897F;
        font-size: 22px;
        background-color: #2B2D36;
    }
`

const FilmData = styled.div`
    color: #FFFFFF;
    margin-left: 10px;
    width: 90%;
    h1 {
        font-size: 20px;
        background-color: #2B2D36;
        font-weight: 200;
    }
`

const FilmData1 = styled.div`
    color: #FFFFFF;
    margin-left: 10px;
    width: 90%;
    margin-bottom: 20px;
    h1 {
        font-size: 20px;
        background-color: #2B2D36;
        font-weight: 200;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100vw;
`

const MovieDetail = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #2B2D36;
    gap: 15px;
`

const Sep = styled.div`
    height: 1px;
    width: 90%;
    border-width: 1px;
    background-color: #4E5A65;
    border-radius: 1px;
`

const FinishButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 42px;
    border-radius: 8px;
    background-color: #EE897F;

    h1 {
        color: #2B2D36;
        font-size: 18px;
        font-weight: 700;
        background-color: #EE897F;
    }

    &:hover {
        cursor: pointer;
    }
`