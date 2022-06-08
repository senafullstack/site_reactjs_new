import { actionTypes } from "../actions/veiculo.action";
const initialState = {
  veiculos: {
    data: [],
  },
  veiculo: {},
  success: false,
  error: {},
};

export default (state = initialState, { type, payload, isLoadMore }) => {
  switch (actionTypes.INDEX) {
    case actionTypes.INDEX:
      if (isLoadMore) {
        payload.veiculos.data = state.veiculos.data.concat(
          payload.veiculos.data
        );
      }
      return { ...state, ...payload };
    case actionTypes.DESTROY:
      return {
        ...state,
        veiculos: {
          ...state.veiculos,
          data: state.veiculos.data.filter((item) => item.id != payload),
        },
      };
    case actionTypes.CHANGE:
      return {
        ...state,
        veiculo: {
          ...state.veiculo,
          ...payload,
        },
      };
    case actionTypes.SUCCESS:
      return {
        ...state,
        success: payload,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
