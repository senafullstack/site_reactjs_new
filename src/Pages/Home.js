import React, { useEffect, useState, useRef, Text } from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import Carouselimg from "../Componentes/Carouselimg.tsx";
import "../Carouselimg.css";
import "react-multi-carousel/lib/styles.css";
import YoutubeEmbed from "../Componentes/YoutubeEmbed";
import Carouselok from "react-multi-carousel";

import {
  Container,
  Card,
  Row,
  Col,
  Accordion,
  Carousel,
  Image,
} from "react-bootstrap";
import { Button } from "@material-ui/core";
import Banner from "../Componentes/Banner";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiUrl, urladminfoto } from "../config/App";
import { GrCircleQuestion } from "react-icons/gr";
import { MdOutlineStar } from "react-icons/md";
import FormataHtml from "../Componentes/FormataHtml";

export default function Home() {
  const conteudoHtml = useRef(null);
  const [efeitoheader, setEfeitoheader] = useState("rgba(67,129,168,0)");
  const [dados, setDados] = useState([]);
  const [dadosperguntas, setDadosperguntas] = useState([]);
  const [dadosdepoimento, setDadosdepoimento] = useState([]);
  const [dadosartigo, setDadosartigo] = useState([]);
  const [dadospublicacao, setDadospublicacao] = useState([]);
  const [dadossobre, setDadossobre] = useState([]);
  const [dadosgaleria, setDadosgaleria] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    axios.get(apiUrl + "/premios").then((res) => {
      const resposta = res.data.data.data;
      setDados(resposta);
    });

    axios.get(apiUrl + "/perguntasfrequentes").then((res) => {
      const per = res.data.data.data;
      setDadosperguntas(per);
    });

    axios.get(apiUrl + "/depoimento").then((res) => {
      let result = res.data.data.data;
      setDadosdepoimento(result);
    });

    axios.get(apiUrl + "/artigoone/1").then((result) => {
      let res = result.data.data.data;
      setDadosartigo(res);
    });
    axios.get(apiUrl + "/publicacaoone/1").then((res) => {
      let dado = res.data.data.data;
      setDadospublicacao(dado);
    });

    axios.get(apiUrl + "/galeria").then((res) => {
      let dado = res.data.data.data;
      setDadosgaleria(dado);
    });
    axios.get(apiUrl + "/sobrenos").then((res) => {
      let dados = res.data.data.data;
      setDadossobre(dados);
    });
    const executaaqui = () => {
      console.log(window.scrollY);
      const show = window.scrollY > 200;
      if (show) {
        console.log("alterar");
        setEfeitoheader("#1b1e23");
      } else {
        setEfeitoheader("rgba(67,129,168,0)");
        console.log("NAO alterar");
      }
    };
    document.addEventListener("scroll", executaaqui);
    return () => {
      document.removeEventListener("scroll", executaaqui);
    };
  }, []);
  return (
    <>
      <Header classe={efeitoheader} />
      <Banner />
      {/*EVENTOS*/}
      <Row>
        <Col className=" text-center ">
          <Row>
            <Col sm="12">
              <img
                src={process.env.PUBLIC_URL + "/img/evento1.jpg"}
                className="img-fluid"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      {/*SOBRE NÓS*/}
      <div className="quadro1">SOBRE NÓS</div>
      <Row className="  pb-5   ">
        <Col>
          <Container>
            {dadossobre.map((resultado) => (
              <Row key={resultado.id_sobrenos}>
                <Col sm={12} className="pt-5 ">
                  <Card>
                    <Card.Body>
                      <FormataHtml texto={resultado.texto} style={{}} />

                      <Link to="/sobrenos" className="btn btn-primary">
                        {" "}
                        veja mais
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </Container>
        </Col>
      </Row>
      {/*DEPOIMENTOS*/}
      <div className="quadro2">CONFIRA QUEM APROVA NOSSOS SERVIÇOS</div>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/img/fundo_depoimento.gif"
          })`,
          zIndex: -200,
          backgroundPosition: "top",
        }}
      >
        <Row className=" pb-5  ">
          <Col>
            <Container>
              <Row>
                <Col sm={6} className="pt-5 d-flex ">
                  <Card>
                    <Card.Header
                      className="text-center"
                      style={{ backgroundColor: "#B8860B" }}
                    >
                      <MdOutlineStar
                        style={{ color: "#ffff00", fontSize: "2em" }}
                      />
                      <MdOutlineStar
                        style={{ color: "#ffff00", fontSize: "2em" }}
                      />
                      <MdOutlineStar
                        style={{ color: "#ffff00", fontSize: "2em" }}
                      />
                      <MdOutlineStar
                        style={{ color: "#ffff00", fontSize: "2em" }}
                      />
                      <MdOutlineStar
                        style={{ color: "#ffff00", fontSize: "2em" }}
                      />
                    </Card.Header>
                    <div className="d-flex align-items-center  ">
                      <Card.Body>
                        <Carousel>
                          {dadosdepoimento.map((result) => (
                            <Carousel.Item key={result.id_depoimento}>
                              <Card.Title className="text-center">
                                {result.nome}
                              </Card.Title>
                              <Card.Title className="text-center">
                                <b>{result.funcao}</b>
                              </Card.Title>
                              <FormataHtml
                                texto={result.descricao}
                                style={{}}
                              />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
                <Col sm={6} className="pt-5 d-flex ">
                  <img
                    src={process.env.PUBLIC_URL + "/img/homem.png"}
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
      {/*EMPRESAS PREMIADAS*/}
      <div className="quadro2">EMPRESAS PREMIADAS</div>
      <Row
        className=" mb-5 pb-5 ml-5 mr-5   fundo "
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <Col>
          <Row>
            {dados.map((resposta) => (
              <Col
                sm={1}
                key={resposta.id_areaatuacao}
                className="pt-5 d-flex "
              >
                <Card>
                  <a href={resposta.link} target="_blank">
                    <Card.Img
                      variant="top"
                      src={urladminfoto + "/" + resposta.foto}
                    />
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/*PREMIAÇÕES*/}
      {/*
    
      <div className="quadro2">PREMIAÇÕES</div>
      <div
        className="fundo"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/img/fundo_premiacao.jpg"
          })`,
          zIndex: -200,
        }}
      >
        <Row>
          <Col sm="4" className="d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/img/trofeu.jpeg"}
              className="img-fluid"
            />
          </Col>
        </Row>
      </div>*/}
      {/*GALERIA*/}
      {dadosgaleria.length > 0 ? (
        <>
          <div className="quadro2">GALERIA</div>
          <Carouselok responsive={responsive}>
            {dadosgaleria.map((resposta) => (
              <>
                <img
                  src={urladminfoto + "/" + resposta.foto}
                  className="img-fluid"
                />
                <div className="quadrogaleria">
                  <div>{resposta.titulo}</div>
                  <div>{resposta.subtitulo}</div>
                </div>
              </>
            ))}
          </Carouselok>
        </>
      ) : (
        <></>
      )}
      <div className="quadroduplo">NOSSO CANAL</div>
      {/*NOSSO CANAL*/}
      <Row className="mt-5 mb-5 pb-5  ">
        <Col>
          <Container>
            <Row>
              <Col className="text-center  ">
                <Row>
                  <Col sm="6" className="mt-5 mb-5 text-center  ">
                    <YoutubeEmbed embedId="CrrrTE7tbS4" />
                  </Col>

                  <Col sm="6" className="mt-5 mb-5 text-center  ">
                    <Row>
                      <Col sm="6" className=" text-center  ">
                        <YoutubeEmbed embedId="3aWixeFYK6c" />
                      </Col>
                      <Col sm="6" className=" text-center mt-3  ">
                        <YoutubeEmbed embedId="tsPyoDaEQh0" />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="6" className="  text-center  ">
                        <YoutubeEmbed embedId="xhJE5Ni-1q8" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      {/*PERGUNTAS FREQUENTES*/}
      <div className="quadro">PERGUNTAS FREQUÊNTES</div>
      <Row className="mt-5 mb-5 pb-5 fundo  ">
        <Col>
          <Container>
            <Row>
              <Col>
                <Accordion defaultActiveKey="1">
                  {dadosperguntas.map((resultado) => (
                    <Accordion.Item
                      key={resultado.id_perguntasfrequentes}
                      eventKey={resultado.id_perguntafrequente}
                    >
                      <Accordion.Header>
                        <h4>
                          <GrCircleQuestion className="m-2" />{" "}
                          {resultado.pergunta}{" "}
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <FormataHtml texto={resultado.resposta} style={{}} />
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Footer />
    </>
  );
}
