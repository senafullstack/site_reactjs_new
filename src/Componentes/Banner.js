import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiUrl, urladminfoto } from "../config/App";
export default function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/banner").then((resposta) => {
      const dados = resposta.data.data.data;
      setBanner(dados);
    });
  }, []);
  return (
    <Carousel>
      {banner.map((retorno) => (
        <Carousel.Item key={retorno.id_banner}>
          <img
            className="d-block w-100"
            src={urladminfoto + "/" + retorno.foto}
            alt={retorno.titulo}
          />
          <Carousel.Caption>
            <Link to={retorno.link}>
              <h1>{retorno.titulo}</h1>
            </Link>
            <h4>{retorno.subtitulo}</h4>
            {retorno.temlink == "S" ? (
              <Link to={retorno.link}>{retorno.titulolink}</Link>
            ) : (
              ""
            )}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
