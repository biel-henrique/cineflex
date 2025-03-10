import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    return (
        <TopHeader>
            <Icon to={'/'}>
                <ion-icon name="film-outline"></ion-icon>
            </Icon>
            <Title to={'/'}>Cineflex</Title>
        </TopHeader>
    )
}

const TopHeader = styled.div`
    height: 67px;
    width: 100%;
    background-color: #EE897F;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FADBC5;
    text-decoration: none;
`

const Title = styled(Link)`
    font-size: 2.5rem;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    background-color: #EE897F;
    text-decoration: none;
    color: #FADBC5;
`

const Icon = styled(Link)`
    color: #FADBC5;
    text-decoration: none;
    font-size: 2.5rem;
    background-color: #EE897F;
    display: flex;
    ion-icon {
        background-color: #EE897F;
    }
`
