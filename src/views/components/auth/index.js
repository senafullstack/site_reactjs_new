import React from "react";
import { change, login } from "../../../store/actions/auth.action";
import { Navigate, Link } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { withStyles } from "@material-ui/styles";
import {
  FaCarAlt,
  FaUserFriends,
  FaGlobe,
  FaDollarSign,
  FaQuestionCircle,
  FaWindowClose,
} from "react-icons/fa";
import InputMask from "react-input-mask";
import "../../../login.css";
const RegisterButton = withStyles({
  root: {
    color: "#fff",
    backgroundColor: "#28a745",
    "&:hover": {
      backgroundColor: "#218838",
      color: "#fff",
    },
  },
})(Button);

export default function Auth() {
  const dispatch = useDispatch();
  console.log(">>" + process.env.PUBLIC_URL);
  const { credentials, success } = useSelector((state) => state.authReducer);
  return (
    <div className="d-flex justify-content-center  bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5 ">
            <div className="card">
              <div className="card-body">
                <div className="form-group text-center">
                  <img src={process.env.PUBLIC_URL + "/logo.png"} width="220" />
                  <Typography className="mt-3" variant="h6" component="h1">
                    Plataforma para Revenda de veiculos
                  </Typography>
                </div>

                <TextField
                  label="Email"
                  type="email"
                  autoComplete="email"
                  margin="normal"
                  fullWidth
                  value={credentials.email}
                  onChange={(text) =>
                    dispatch(change({ email: text.target.value }))
                  }
                />

                <TextField
                  required
                  label="Senha"
                  type="password"
                  margin="normal"
                  fullWidth
                  value={credentials.password}
                  onChange={(text) =>
                    dispatch(change({ password: text.target.value }))
                  }
                />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  startIcon={<FaGlobe />}
                  className="mt-4 mb-4"
                  onClick={() => dispatch(login(credentials))}
                >
                  Entrar
                </Button>

                <RegisterButton
                  component={Link}
                  to="/register"
                  variant="contained"
                  fullWidth
                  size="large"
                  className="mt-4 mb-4"
                  type="Button"
                >
                  Cadastrar
                </RegisterButton>

                {success && <Navigate to="/home" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
