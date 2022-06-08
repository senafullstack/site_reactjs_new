import React, { useState, useEffect, useRef } from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Carouselimg from "../Componentes/Carouselimg.tsx";
import "../Carouselimg.css";
import { urladminfoto, apiUrl } from "../config/App";
import { Link } from "react-router-dom";
import { Card, Accordion, Carousel, Image } from "react-bootstrap";
export default function Sobrenos() {
  const [dados, setDados] = useState([]);
  const conteudoHtml = useRef(null);
  useEffect(() => {
    axios.get(apiUrl + "/galeria").then((result) => {
      const resultado = result.data.data.data;

      setDados(resultado);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="quadro2">PREMIAÇÕES</div>
      <Container>
        <Row>
          <Col className=" mb-5 text-center ">
            <Row>
              <Col sm="4">
                <a href={process.env.PUBLIC_URL + "/certificado"}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/certificado.jpg"}
                    className="img-fluid"
                  />
                </a>
              </Col>
              <Col sm="4">
                <a href={process.env.PUBLIC_URL + "/trofeu"}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/trofeu.jpg"}
                    className="img-fluid"
                  />
                </a>
              </Col>
              <Col sm="4">
                <a href={process.env.PUBLIC_URL + "/placa"}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/placa.jpg"}
                    className="img-fluid"
                  />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carouselimg show={4} infiniteLoop withIndicator>
              {dados.map((resposta) => (
                <h2 data-testid="carousel-item-1">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={urladminfoto + "/" + resposta.foto}
                    />
                    <Card.Title>Nome da cliente </Card.Title>
                  </Card>
                </h2>
              ))}
            </Carouselimg>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
