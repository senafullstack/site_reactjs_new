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
      <div className="quadro2">CERTIFICADO</div>
      <Container>
        <Row>
          <Col className=" mb-5 text-center ">
            <Row>
              <Col sm="6">
                <img
                  src={process.env.PUBLIC_URL + "/img/certificado.jpg"}
                  className="img-fluid"
                />
              </Col>

              <Col sm="6" className="texto">
                O INPEQ – INSTITUTO NACIONAL DE PESQUISA E QUALIDADE LTDA,
                surgiu no ano de 2011, com o propósito idealizador de elaborar e
                realizar pesquisas no vasto ramo da política, de satisfação
                NPS/CSAT/CES e mercado. Visando uma interação com o
                empreendedorismo e o público externo, o qual há uma verdadeira
                propositura que chancela ideias e aspectos valorosos ao
                posicionamento de uma empresa no mercado brasileiro. O papel da
                instituição INPEQ – INSTITUTO NACIONAL DE PESQUISA E QUALIDADE
                LTDA, vincula-se extremamente à capacidade crítica do pensamento
                do público como base em análises mercadológicas, que em
                conformidade ao julgamento positivo ou negativo para uma
                determinada empresa, resulta por meio de levantamento
                estatísticos um elaborado Laudo de Análise Técnico.
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
