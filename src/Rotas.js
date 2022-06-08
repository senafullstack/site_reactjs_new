import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Home = lazy(() => import("./Pages/Home"));
const Sobrenos = lazy(() => import("./Pages/Sobrenos"));
const Perguntasfrequentes = lazy(() => import("./Pages/Perguntasfrequentes"));
const Verareaatuacao = lazy(() => import("./Pages/Verareaatuacao"));
const Publicacoes = lazy(() => import("./Pages/Publicacao"));

const Ramoatividade = lazy(() => import("./Pages/Ramoatividade"));
const Premios = lazy(() => import("./Pages/Premios"));
const Depoimento = lazy(() => import("./Pages/Depoimento"));
const Vernoticia = lazy(() => import("./Pages/Vernoticia"));
const Certificado = lazy(() => import("./Pages/Certificado"));
const Selo = lazy(() => import("./Pages/Selo"));
const Trofeu = lazy(() => import("./Pages/Trofeu"));
const Placa = lazy(() => import("./Pages/Placa"));
const Premiacoes = lazy(() => import("./Pages/Premiacoes"));
const Contato = lazy(() => import("./Pages/Contato"));
export default function Rotas() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
            <CircularProgress />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route path="/certificado" element={<Certificado />} />
          <Route path="/premiacoes" element={<Premiacoes />} />
          <Route path="/selo" element={<Selo />} />
          <Route path="/placa" element={<Placa />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/trofeu" element={<Trofeu />} />
          <Route
            path="/perguntasfrequentes"
            element={<Perguntasfrequentes />}
          />
          <Route path="/verareaatuacao/:codigo" element={<Verareaatuacao />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/premios" element={<Premios />} />
          <Route path="/depoimentos" element={<Depoimento />} />
          <Route path="/ramoatividade" element={<Ramoatividade />} />

          <Route path="/vernoticia/:codigo" element={<Vernoticia />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
