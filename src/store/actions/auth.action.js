import { Http } from "../../config/Http";
import { changeLoading } from "./loading.action";
import { changeNotify } from "./notify.action";

export const actionsTypes = {
  CHANGE: "AUTH_CHANGE",
  SUCCESS: "AUTH_SUCCESS",
};

export const change = (payload) => ({
  type: actionsTypes.CHANGE,
  payload,
});

export const success = (payload) => ({
  type: actionsTypes.SUCCESS,
  payload,
});
export const setUserToken = (token) => (dispatch) => {
  localStorage.setItem("access_token", token);
  dispatch(
    change({
      email: "",
      password: "",
    })
  );
  dispatch(success(true));
};

export const deleteUserToken = () => (dispatch) => {
  localStorage.removeItem("access_token");
  dispatch(
    change({
      email: "",
      password: "",
    })
  );
  alert("CABRUNCO");
  dispatch(success(false));
};
export const login = (credenciais) => (dispatch) => {
  // console.log(credenciais);
  dispatch(
    changeLoading({
      open: true,
      msg: "Autenticando Usuário...",
    })
  );
  return Http.post("oauth/token", {
    grant_type: "password",
    client_id: 2,
    client_secret: "LsuJzon0Cy1qiK3kQXZYlHNnYrbWiNWhETZBSge5",
    username: credenciais.email,
    password: credenciais.password,
  })
    .then((res) => {
      dispatch(
        changeLoading({
          open: false,
        })
      );
      if (typeof res !== "undefined") {
        if (res.data.access_token) {
          dispatch(setUserToken(res.data.access_token));
        }
      }
    })
    .catch((error) => {
      dispatch(
        changeLoading({
          open: false,
        })
      );
      if (typeof error.response !== "undefined") {
        if (error.response.status === 401 || error.response.status === 400) {
          dispatch(
            changeNotify({
              open: true,
              class: "error",
              msg: "E-mail ou senha Incorretos",
            })
          );
          console.log("pagina nao encontrada");
        } else {
          dispatch(
            changeNotify({
              open: true,
              class: "error",
              msg: "Erro ao se conectar ao servidor",
            })
          );
        }
      }
      console.log(error);
    });
};
