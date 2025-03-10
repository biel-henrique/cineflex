import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieSession({session}) {
    return(
        <Content>
            {session?.map((item, index) => {
                return (
                    <Item key={index}>
                        <h1>{item.weekday}, {item.date}</h1>
                        <Sep></Sep>
                        <Hour>
                            {item.showtimes.map((showtime, index) => {
                                return (
                                    <HourLink key={index} to={`/assentos/${showtime.id}`}>
                                        <div>{showtime.name}</div>
                                    </HourLink>
                                )
                            })}
                        </Hour>
                    </Item>
                )
            })}
        </Content>
    )
}

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

`

const HourLink = styled(Link)`
    display: flex;
    justify-content: center;
    color: #EE897F;
    font-size: 16px;
    align-items: center;
    background-color: #2B2D36;
    width: 84px;
    height: 41px;
    border: 2px solid #EE897F;
    text-decoration: none;

    div {
        background-color: #2B2D36;
    }
`