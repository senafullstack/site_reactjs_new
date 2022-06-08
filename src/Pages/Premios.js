import React, { useState, useEffect, useRef } from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { urladminfoto, apiUrl } from "../config/App";
import { Link } from "react-router-dom";
import { Card, Accordion, Carousel, Image } from "react-bootstrap";
export default function Sobrenos() {
  const [dadossobre, setDados] = useState([]);
  const conteudoHtml = useRef(null);
  useEffect(() => {
    axios.get(apiUrl + "/premios").then((result) => {
      const resultado = result.data.data.data;

      setDados(resultado);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col className="mt-5 mb-5 text-center ">
            <h1 style={{}}>Empresas Premiadas</h1>
            <Row>
              <Col></Col>
              <Col>
                <hr
                  style={{
                    color: "#A45E4D",
                    backgroundColor: "#A45E4D",
                    height: 5,
                  }}
                />
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          {dadossobre.map((resposta) => (
            <Col
              sm={3}
              key={resposta.id_areaatuacao}
              className="pt-5 d-flex justify-content-center align-items-center"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src={urladminfoto + "/" + resposta.foto}
                />
                <Card.Body>
                  <Card.Title>{resposta.titulo} </Card.Title>
                  <Card.Text ref={conteudoHtml}>
                    <center>
                      <h4>
                        <b>{resposta.empresa}</b>
                      </h4>
                    </center>
                  </Card.Text>
                  <center>
                    <Link
                      className="btn btn-primary"
                      to={"/verareaatuacao/" + resposta.id_areaatuacao}
                    >
                      veja mais
                    </Link>
                  </center>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
