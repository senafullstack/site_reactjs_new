import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import {
  Container,
  Card,
  Row,
  Col,
  Accordion,
  Carousel,
} from "react-bootstrap";
import axios from "axios";
import { urladminfoto, apiUrl } from "../config/App";
import FormataHtml from "../Componentes/FormataHtml";

export default function Sobrenos() {
  const [dadossobre, setDados] = useState([]);

  useEffect(() => {
    axios.get(apiUrl + "/sobrenos").then((result) => {
      const resultado = result.data.data.data;

      setDados(resultado);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="quadro">SOBRE NÓS</div>
      <Container>
        {dadossobre.map((resultado) => (
          <Row key={resultado.id_sobrenos}>
            <Col sm={3} key={resultado.id_sobrenos}>
              <img
                src={urladminfoto + "/" + resultado.foto}
                className="img-fluid"
              />
            </Col>
            <Col sm={9}>
              <FormataHtml texto={resultado.texto} style={{}} />
            </Col>
          </Row>
        ))}
      </Container>
      <Footer />
    </>
  );
}
