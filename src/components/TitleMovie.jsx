import styled from "styled-components"


export default function TitleMovie({movie, day, time}) {
    return (
        <Title>
            <div>Filme:
                <h1>{movie?.title}</h1>
            </div>
            <div>Dia:
                <h1>{day?.weekday}, {day?.date}</h1>
            </div>
            <div>Horário:
                <h1>{time}</h1>
            </div>
        </Title>
    )
}

const Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: 78px;
    width: 100vw;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;

    div {
        display: flex;
        gap: 10px;
        font-size: 24px;
        font-weight: 700;
        justify-content: flex-start;

        h1 {
            font-size: 24px;
            color: #EE897F;
        }
    }
`