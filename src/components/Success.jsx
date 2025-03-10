import axios from "axios"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

export default function Success() {

    const navigate = useNavigate()

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
                            <h1>oi</h1>
                            <h1>oi</h1>
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
                            <h1>oi</h1>
                        </div>
                    </FilmData>
                    <Title>
                        <div>
                            <h1>Comprador</h1>
                        </div>
                    </Title>
                    <Sep></Sep>
                    <FilmData1>
                        <div>
                            <h1>oi</h1>
                            <h1>oi</h1>
                        </div>
                    </FilmData1>
                </MovieDetail>
                <FinishButton onClick={() => navigate('/')} type='subimit'>
                    <h1>Reservar Assento(s)</h1>
                </FinishButton>
            </Content>
        </>
    )
}

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
    margin-left: 30px;
    width: 90%;
    h1 {
        font-size: 20px;
        background-color: #2B2D36;
    }
`

const FilmData1 = styled.div`
    color: #FFFFFF;
    margin-left: 30px;
    width: 90%;
    margin-bottom: 20px;
    h1 {
        font-size: 20px;
        background-color: #2B2D36;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
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
    width: 90%;
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