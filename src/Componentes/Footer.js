import React from "react";
const estilo = {};
export default function Footer() {
  let dataatual = new Date();
  let ano = dataatual.setFullYear();
  return (
    <>
      <div className="bg-dark mt-5" style={{ color: "#ffffff" }}>
        <div className="container ">
          <footer className="py-5">
            <div className="row">
              <div className="col-md-2">
                <h5>INPEQ</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a
                      href={process.env.PUBLIC_URL + "/home"}
                      className="nav-link p-0 text-muted"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href={process.env.PUBLIC_URL + "/sobrenos"}
                      className="nav-link p-0 text-muted"
                    >
                      Sobre nós
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href={process.env.PUBLIC_URL + "/perguntasfrequentes"}
                      className="nav-link p-0 text-muted"
                    >
                      Perguntas Frequêntes
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Ramos de Atividade</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a
                      href={process.env.PUBLIC_URL + "/ramoatividade"}
                      className="nav-link p-0 text-muted"
                    >
                      Sistemas Web
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href={process.env.PUBLIC_URL + "/ramoatividade"}
                      className="nav-link p-0 text-muted"
                    >
                      Refrigeração
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href={process.env.PUBLIC_URL + "/ramoatividade"}
                      className="nav-link p-0 text-muted"
                    >
                      Tecnologia
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href={process.env.PUBLIC_URL + "/ramoatividade"}
                      className="nav-link p-0 text-muted"
                    >
                      E muito mais
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5></h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">contato@inpeq.com.br</li>
                  <li> (81) 2626-1502</li>
                  <li> Horário de Funcionamento:</li>
                  <li> de Segunda a Sexta</li>
                  <li> das 8:00 as 18:00 horas</li>
                </ul>
              </div>

              <div className="col-md-5 offset-1">
                <form>
                  <h5>
                    Rua Alfredo Coutinho,95 Poçoda Panela<br></br>
                    Recife-PE, CEP: 52.061-130
                  </h5>
                  <p>Inscreva-se!</p>
                  <div className="d-flex w-100 gap-2">
                    <a
                      href={process.env.PUBLIC_URL + "/contato"}
                      className="btn btn-primary"
                    >
                      <h3> Clique aqui para efetuar sua inscrição</h3>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex justify-content-between py-4 my-4 border-top">
              <p>
                <a href="" className="nav-link p-0 text-muted">
                  © {new Date().getFullYear()} Todos os direitos Reservados,
                  Desenvolvido por{" "}
                  <a href="https://www.swsagenciadigital.com.br">
                    SWS Agência Digital
                  </a>
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
