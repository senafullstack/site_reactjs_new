import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Http } from "../config/Http";
import { apiUrl, rootUrl } from "../config/App";
import axios from "axios";
import {
  FaBalanceScale,
  FaTrophy,
  FaFacebookF,
  FaInstagramSquare,
  FaWhatsapp,
  FaHome,
} from "react-icons/fa";
import FloatingWhatsApp from "react-floating-whatsapp";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import Logo from "../logo_mini.png";

export default class Headernovo extends Component {
  state = {
    areaatuacao: [],
  };

  componentDidMount() {
    axios.get(apiUrl + "/areaatuacao").then((res) => {
      const dados = res.data.data.data;
      console.log("aqui");
      this.setState({ areaatuacao: dados });
    });
  }
  render() {
    return (
      <>
        <FloatingWhatsApp
          phoneNumber={"558126261502"}
          accountName="INPEQ"
          className="whatsapp"
          statusMessage="Online"
          avatar={Logo}
          chatMessage="Precisa de ajuda? fale conosco! "
          placeholder="Enviar Mensagem"
          allowClickAway={true}
        />

        <Navbar
          fixed={"top"}
          className="shadow-lg  fixed-top "
          collapseOnSelect
          expand="lg"
          scrolling
          fixed-top
          variant="dark"
          style={{ backgroundColor: this.props.classe }}
        >
          <Container>
            <Navbar.Brand
              href={process.env.PUBLIC_URL + "/home"}
              style={{ backgroundColor: this.props.classe }}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/logo_mini.png"}
                className="img-fluid"
                style={{ backgroundColor: this.props.classe }}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ backgroundColor: this.props.classe }}
            />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              style={{ backgroundColor: this.props.classe }}
            >
              <Nav className="me-auto">
                <NavDropdown title="Sobre Nós" id="collasible-nav-dropdown">
                  <NavDropdown.Item
                    href={process.env.PUBLIC_URL + "/sobrenos/"}
                  >
                    Nossa História
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href={process.env.PUBLIC_URL + "/perguntasfrequentes/"}
                  >
                    Perguntas Frequêntes
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href={process.env.PUBLIC_URL + "/depoimentos/"}
                  >
                    Depoimentos
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href={process.env.PUBLIC_URL + "/ramoatividade"}>
                  Ramos de Atividade
                </Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + "/premiacoes"}>
                  Premiações
                </Nav.Link>
                <Nav.Link
                  href={process.env.PUBLIC_URL + "/perguntasfrequentes"}
                >
                  Eventos
                </Nav.Link>
                <Nav.Link
                  href={process.env.PUBLIC_URL + "/perguntasfrequentes"}
                >
                  BLOG
                </Nav.Link>
              </Nav>
              <Nav style={{ backgroundColor: this.props.classe }}>
                <a
                  href="https://api.whatsapp.com/send/?phone=558126261502"
                  target="_blank"
                >
                  <FaWhatsapp
                    style={{
                      color: "#FFF",
                      fontSize: "45px",
                    }}
                    className="m-2"
                  />
                </a>

                <a
                  href="https://www.instagram.com/premio_inpeq/"
                  target="_blank"
                >
                  <FaInstagramSquare
                    className="m-2"
                    style={{
                      color: "#FFF",
                      fontSize: "45px",
                    }}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100073958024319"
                >
                  <FaFacebookF
                    className="m-2"
                    style={{
                      color: "#FFF",
                      fontSize: "45px",
                    }}
                  />
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row>
          <Col></Col>
        </Row>
      </>
    );
  }
}
