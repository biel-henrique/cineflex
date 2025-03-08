import styled from "styled-components";

export default function Header() {
    return (
        <TopHeader>
            <ion-icon name="film-outline"></ion-icon>
            <h1>Cineflex</h1>
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
    h1 {
       font-size: 2.5rem;
       font-weight: 600;
       font-family: 'Raleway', sans-serif;
       background-color: #EE897F;
    }

    ion-icon{
        font-size: 2.5rem;
        background-color: #EE897F;
    }
`
