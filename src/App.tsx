import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./routes";
import "./style.css";
import { useTheme } from "./hooks/useTheme";
import { store } from "./store";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const [theme] = useTheme();

  return (
    <BrowserRouter>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
