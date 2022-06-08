import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { urladminfoto, apiUrl } from "../config/App";
import FormataHtml from "../Componentes/FormataHtml";

export default function Depoimento() {
  const [dadossobre, setDados] = useState([]);

  useEffect(() => {
    axios.get(apiUrl + "/depoimento").then((result) => {
      const resultado = result.data.data.data;
      console.log(resultado);
      setDados(resultado);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="quadro">DEPOIMENTOS</div>
      <Container>
        {dadossobre.map((resultado) => (
          <Row key={resultado.id_sobrenos}>
            <Col sm={12}>
              <center>
                <b>
                  {" "}
                  <FormataHtml texto={resultado.nome} style={{}} />
                </b>
              </center>
            </Col>
            <Col sm={12}>
              <center>
                {" "}
                <i>
                  {" "}
                  <FormataHtml texto={resultado.funcao} style={{}} />
                </i>
              </center>
            </Col>
            <Col sm={12}>
              {" "}
              <FormataHtml texto={resultado.descricao} style={{}} />
            </Col>
          </Row>
        ))}
      </Container>
      <Footer />
    </>
  );
}
