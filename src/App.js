// import logo from './logo.svg';
// import './App.css';

import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

const Container = styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width:300px;
background:white;
font-family:Montserrat;
`

const AppLabel = styled.span`
color:black;
font-size:18px;
font-weight:bold; 
`

// const CityComponent = styled.div`
// display:flex;
// flex-direction:column;
// `

// const WeatherComponent = styled.div`
// display:flex;
// flex-direction:column;
// ` So App.js will be cleaner


function App() {
  return (
    <Container>
      <AppLabel>Weather Application</AppLabel>

      {/* <CityComponent /> */}
      <WeatherComponent />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </Container >
  );
}

export default App;
