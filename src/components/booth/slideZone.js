import React, { useEffect, useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { a } from 'react-spring'
import InfiniteSlider from "./infiniteslider"
import PortfolioContext from "context/context";
import Title from "components/booth/title";
import { Container, Row, Col } from "react-bootstrap";

// import './styles.css'

const Main = styled.div`
  height: 80vh;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px 100px;
`

const Marker = styled.span`
  color: white;
  position: absolute;
  top: 0px;
  left: 140px;
  font-family: monospace;
`

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center center;
  background-repeat:no-repeat;
`

const Test = () => {
  let { contentPhoto, clubObj } = useContext(PortfolioContext);
  contentPhoto = contentPhoto.map((content) => (
    {css:`url(${content})`,
    height : 200
  }
  ))
  return (
    <section id="sliderZone">
      <Title title={`${clubObj.name} 전시관`} id="slideTitle" />
    <div id="sliderRoot">
      {contentPhoto &&
    <Main>
        <InfiniteSlider items={contentPhoto} width={800} visible={2}>
          {({ css }, i) => (
            <Content>
              <Marker>{String(i).padStart(2, '0')}</Marker>
              <Image style={{ backgroundImage: css }} />
            </Content>
          )}
          
        </InfiniteSlider>
      </Main>
}
      </div>
    </section>
  );
};
export default Test