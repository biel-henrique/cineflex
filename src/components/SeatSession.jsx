import styled from "styled-components"

export default function SeatSession({seats, id, addId}) {
    return (
        <Seat>
            {seats?.map((item, index) => (
                item.isAvailable ? (
                    <SeatNumber
                        onClick={() => addId(item.id, item.name)}
                        $idSeat={id.includes(item.id)}
                        key={index}
                    >
                        {item.name}
                    </SeatNumber>
                ) : (
                    <SeatNumberDark
                        onClick={() => alert('Esse assento não está disponível!')}
                        key={index}
                    />
                )
            ))}
        </Seat>
    )
}

const Seat = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 7px;
    width: 90%;
`

const SeatNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    top: 148px;
    left: 24px;
    border-radius: 12px;
    background-color: ${props => (
        props.$idSeat 
        ? 
        '#FADBC5'
        :
        '#9DB899'
    )};
    color: #2B2D36;
    border: ${props => (
        props.$idSeat
        ? 
        '2px solid #EE897F'
        :
        ''
    )};
    &:hover {
        cursor: pointer;
    }
`

const SeatNumberDark = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    top: 148px;
    left: 24px;
    border-radius: 12px;
    background-color: #2B2D36;
    color: #2B2D36;
`