import { actionsTypes } from "../actions/menu.action";

const initialState = {
  sidebarShow: true,
};

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case actionsTypes.CHANGE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
