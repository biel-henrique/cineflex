import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import loading from "../assets/loading.gif"

export default function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        .then(res => {
            setMovies(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    if (!movies.length) {
        return (
            <LoadingGif>
                <img src={loading} alt="" />
            </LoadingGif>
        )
    }

    return (
        <Site>
            <Title> 
               <h1>Em Cartaz</h1>
            </Title>
            <Content>
                <Subcontent>
                    {movies.map((item, index) => {
                        return (
                            <Imagem to={`/sessoes/${item.id}`} key={index}>
                                <img src={item.posterURL} alt={item.title} />
                            </Imagem>
                        )
                    })}
                </Subcontent>
            </Content>
        </Site>
    )
}

const Site = styled.div`
    margin-top: 67px;
`

const LoadingGif = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    display: flex;
    height: 78px;
    width: 100vw;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    position: fixed;
    top: 67;
    left: 0;
    h1 {
        font-size: 24px;
    }
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`

const Subcontent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 26px;
    width: 100vw;
`

const Content = styled.div`
    padding-top: 104px;
`

const Imagem = styled(Link)`
    img {
        width: 145px;
        height: 210px;
        top: 145px;
        left: 29px;
        border-radius: 8px;
    }
`