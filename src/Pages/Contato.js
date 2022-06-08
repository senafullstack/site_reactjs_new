import React, { useState, useEffect, useRef } from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
      <div className="quadro2">Cadastre-se</div>
      <div className="mb-5"></div>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="email" placeholder="Nome Completo" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Profissão</Form.Label>
                <Form.Control type="email" placeholder="Profissão" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Região/Cidade</Form.Label>
                <Form.Control type="email" placeholder="Região/Cidade" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="email" placeholder="Telefone" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Efetuar Cadastro
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
