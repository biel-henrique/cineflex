import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        .then(res => {
            console.log(res.data)
            setMovies(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    return (
        <>
            <Title> 
               <h1>Em Cartaz</h1>
            </Title>
            <div>
                <Content>
                    {movies.map((item, index) => {
                        return (
                            <Imagem to={`/sessoes/${item.id}`} key={index}>
                                <img src={item.posterURL} alt={item.title} />
                            </Imagem>
                        )
                    })}
                </Content>
            </div>
        </>
    )
}

const Title = styled.div`
    display: flex;
    height: 78px;
    width: 100vw;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    h1 {
        font-size: 24px;
    }
`

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 26px;
    width: 100vw;
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