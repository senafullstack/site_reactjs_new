import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Http } from "../config/Http";
import { apiUrl, rootUrl } from "../config/App";
import axios from "axios";
import {
  FaBalanceScale,
  FaFacebookF,
  FaInstagramSquare,
  FaWhatsapp,
  FaHome,
} from "react-icons/fa";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";

const style = {
  backgroundColor: " #533730",
};
const stylemenu = {
  backgroundColor: "#A45E4D",
};
export default function Header() {
  const [areaatuacao, setareaatuacao] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/areaatuacao").then((res) => {
      const dadosareaatuacao = res.data;

      setareaatuacao(dadosareaatuacao);
      console.log(areaatuacao);
    });
  }, []);
  return (
    <>
      <Navbar
        className="shadow-lg"
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={style}
      >
        <Container>
          <Navbar.Brand href="#home">
            <FaBalanceScale /> Menezes Aquino Advogados
          </Navbar.Brand>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <FaWhatsapp /> Agende seu atendimento
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center"></Col>
          <Col
            md={4}
            sm={12}
            className="p-5 d-flex justify-content-center align-items-center"
          >
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/img/logo.png"}
                className="img-fluid"
                style={{ width: "95%" }}
              />
            </Link>
          </Col>
          <Col className="d-flex justify-content-center align-items-center  ">
            <a
              target="_blank"
              href="https://www.facebook.com/101344471268492/posts/726116852124581/?d=n&substory_index=0"
            >
              <FaFacebookF
                className="m-2"
                style={{
                  color: "#A45E4D",
                  fontSize: "45px",
                }}
              />
            </a>
            <FaInstagramSquare
              className="m-2"
              style={{
                color: "#A45E4D",
                fontSize: "45px",
              }}
            />

            <FaWhatsapp
              style={{
                color: "#A45E4D",
                fontSize: "45px",
              }}
              className="m-2"
            />
          </Col>
        </Row>
      </Container>
      <Navbar
        className="shadow-lg mt-5"
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={stylemenu}
      >
        <Container>
          <Navbar.Brand href="#home">
            <FaHome />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Sobre nós</Nav.Link>
              <Nav.Link href="#pricing">Perguntas Frequêntes</Nav.Link>
              <NavDropdown
                title="Áreas de Atuação"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  <Link to="/areaatuacao/">Direito à Saúde</Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.1">
                  <a href="#">Direito à Saúde</a>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Direito Médico
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Direito Odontológico
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">Artigos</Nav.Link>
              <Nav.Link href="#pricing">Publicações</Nav.Link>
              <Nav.Link href="#pricing">Depoimentos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <FaWhatsapp />
                (71) 99991-67744
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
