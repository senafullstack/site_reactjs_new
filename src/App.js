import Rotas from "./Rotas";

import { createTheme, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { Loading, Notify, Alert, Dialogo } from "./views/components/";
import "./estilogeral.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#446515",
    },
    secondary: {
      main: "#43B10E",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Alert />
        <Notify />
        <Loading />
        <Rotas />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
