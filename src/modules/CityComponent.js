import styled from "styled-components"
import perfectDay from "../icons/perfect-day.svg"

const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`;

const ChooseCityLabel = styled.form`
display: flex;
flex-direction: row;
color:black;
font-size: 18px;
font-weight: bold;
margin: 0px auto;

input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
}

button {
    padding: 10px;
    font-size: 14px;
    color: white;
    background: black;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
}
`;

const SearchBox = styled.span`
color:black;
font-size: 18px;
font-weight: bold;
margin: 10px auto;
`;

const CityComponent = () => {
    return (
        <>
            <WeatherLogo src={perfectDay} />
            <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
            <SearchBox>
                <input placeholder="City" />
                <button>Search</button>
            </SearchBox>

        </>
    );
};

export default CityComponent;