export const actionsTypes = {
  CHANGE: "set",
};

export const changeMenu = (payload) => ({
  type: actionsTypes.CHANGE,
  payload,
});
