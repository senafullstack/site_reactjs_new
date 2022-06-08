import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import FormataHtml from "../Componentes/FormataHtml";
import { useParams } from "react-router-dom";
import { urladminfoto, apiUrl } from "../config/App";

export default function Areaatuacao(props) {
  const [dadossobre, setDados] = useState([]);
  const params = useParams();
  const id_areaatuacao = params["codigo"];

  useEffect(() => {
    axios.get(apiUrl + "/areaatuacao/" + id_areaatuacao).then((result) => {
      const resultado = result.data.data.data;
      console.log(resultado);
      setDados(resultado);
    });
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col className="mt-5 mb-5 text-center ">
            <h1 style={{}}>{dadossobre["titulo"]}</h1>
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

            <Row>
              <Col sm={3}>
                <img
                  src={urladminfoto + "/" + dadossobre["foto"]}
                  className="img-fluid"
                />
              </Col>
              <Col sm={9}>
                <FormataHtml texto={dadossobre["texto"]} style={{}} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
