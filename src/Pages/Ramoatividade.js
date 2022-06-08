import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import { urladminfoto, apiUrl } from "../config/App";
import Select from "react-select";
export default function Areaatuacao() {
  const [dadossobre, setDados] = useState([]);
  const [dadospremio, setDadosPremio] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([{ value: 0, label: "Selecione" }]);
  function clicar() {
    alert(selectedOption.value);
  }
  useEffect(() => {
    axios.get(apiUrl + "/premios").then((result) => {
      const resultado = result.data.data.data;
      console.log(resultado);
      setDadosPremio(resultado);
    });

    axios.get(apiUrl + "/ramoatividade").then((result) => {
      const resultado = result.data.data.data;
      const opcoes = [];
      setDados(resultado);
      resultado.map((item) => {
        opcoes.push({ value: item.id_ramoatividade, label: item.descricao });
      });
      // console.log(opcoes);
      setOptions(opcoes);
    });
  }, []);
  return (
    <>
      <Header />
      <div className="quadro2 mb-5">RAMOS DE ATIVIDADE</div>

      <Container ClassName="mt-5">
        <Row>
          <Col sm={3}>
            <Select
              options={options}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              placeholder="Busque por Categoria"
            />
          </Col>
          <Col sm={3}>
            <Form.Control size="md" type="text" placeholder="Região/Cidade" />
          </Col>
          <Col sm={2}>
            <Button variant="outline-secondary" onClick={clicar}>
              Buscar{" "}
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="mb-5"> </div>
      <Container ClassName="mt-5">
        <Row>
          {dadospremio.map((resultado) => (
            <Col sm={2} key={resultado.id_areaatuacao} className="pt-5 d-flex ">
              <Card>
                <a href={resultado.link} target="_blank">
                  <Card.Img
                    variant="top"
                    src={urladminfoto + "/" + resultado.foto}
                  />
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
}
