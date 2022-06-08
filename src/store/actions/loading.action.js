export const actionsTypes = {
  CHANGE: "CHANGE_LOAGING",
};

export const changeLoading = (payload) => ({
  type: actionsTypes.CHANGE,
  payload,
});
