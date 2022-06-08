import { HttpAuth } from "../../config/Http";
import { changeLoading } from "./loading.action";

export const actionTypes = {
  INDEX: "VEICULO_INDEX",
  DESTROY: "VEICULO_DESTROY",
  CHANGE: "VEICULO_CHANGE",
  SUCCESS: "VEICULO_SUCCESS",
  ERROR: "VEICULO_ERROR",
};
export const change = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});
export const success = (payload) => ({
  type: actionTypes.SUCCESS,
  payload,
});

export const error = (payload) => ({
  type: actionTypes.ERROR,
  payload,
});

export const destroyResponse = (payload) => ({
  type: actionTypes.DESTROY,
  payload,
});

// INDEX
export const indexResponse = (payload, isLoadMore) => ({
  type: actionTypes.INDEX,
  payload,
  isLoadMore,
});

export const index = (query, isloadMore) => (dispatch) => {
  return HttpAuth.get("/veiculos?" + new URLSearchParams(query)).then((res) => {
    if (typeof res != "undefined") {
      dispatch(indexResponse(res.data, isloadMore));
    }
  });
};

//store
export const store = () => (dispatch) => {
  return HttpAuth.post("/veiculos").then((res) => {
    if (typeof res != "undefined") {
      dispatch(indexResponse(res.data));
    }
  });
};

// show
export const show = (id) => (dispatch) => {
  return HttpAuth.get("/veiculos/" + id).then((res) => {
    if (typeof res != "undefined") {
      dispatch(indexResponse(res.data));
    }
  });
};

// update
export const update = (data) => (dispatch) => {
  dispatch(changeLoading({ open: true }));
  return HttpAuth.put("/veiculos/" + data.id, data).then((res) => {
    dispatch(changeLoading({ open: false }));
    if (typeof res !== "undefined") {
      if (res.data.error) {
        dispatch(success(false));
        dispatch(error(res.data.error));
      }
      if (res.data.status === 200) {
        dispatch(success(true));
      }
    }
  });
};

export const destroy = (id) => (dispatch) => {
  return HttpAuth.delete("/veiculos/" + id).then((res) => {
    if (typeof res != "undefined") {
      if (res.data.status === 200) {
        dispatch(destroyResponse(id));
      }
    }
  });
};
