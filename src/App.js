import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header";
import Photo from "./components/photo";
import Description from "./components/description";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    background: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const ImageContainer = styled.div`
    height: 10%;
  `;
  const TextContainer = styled.div`
    border: 1px black solid;
    width: 50%;

    padding: 15px;
    background-color: rgba(252, 252, 252, 0.692);
  `;

  const [nasaInfo, setNasaInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=oRvfGOLxs1ZfgRXbCVUg7ucatO9tooIhNMhkExRW`
      )
      .then(response => {
        console.log(response.data);
        setNasaInfo(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <Container>
      <Header />
      <ImageContainer>
        <Photo key={nasaInfo.date} imgUrl={nasaInfo.url} />
      </ImageContainer>
      <TextContainer>
        <Description
          key={nasaInfo.title}
          title={nasaInfo.title}
          date={nasaInfo.date}
          explanation={nasaInfo.explanation}
        />
      </TextContainer>
    </Container>
  );
}

export default App;
