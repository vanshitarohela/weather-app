import styled from "styled-components";
import perfectDay from "../icons/perfect-day.svg"

const WeatherCondition = styled.div`
display:flex;
flex-direction:row;
align_items:center;
width: 100%;
justigy-content: space-between;
margin: 30px auto;
`;

const Condition = styled.span`
display:flex;
flex-direction:row;

`;

const WeatherLogo = styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
`;

const WeatherComponent = () => {
    return <>
        <WeatherCondition>
            <Condition>30 C</Condition>
            <WeatherLogo src={perfectDay} />
        </WeatherCondition>
    </>;
};

export default WeatherComponent;