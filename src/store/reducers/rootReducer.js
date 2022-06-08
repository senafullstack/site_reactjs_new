import { combineReducers } from "redux";
import loadingReducer from "./loading.reducer";
import notifyReducer from "./notify.reducer";
import alertReducer from "./alert.reducer";
import authReducer from "./auth.reducer";
import registerReducer from "./register.reducer";
import veiculosReducer from "./veiculo.reducer";
import menuReducer from "./menu.reducer";
const rootReducer = combineReducers({
  loadingReducer,
  notifyReducer,
  alertReducer,
  authReducer,
  registerReducer,
  veiculosReducer,
  menuReducer,
});
export default rootReducer;
