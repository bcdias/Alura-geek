import { GlobalStyle } from "./components/GlobalStyle";
import Cabecalho from "./components/cabecalho";
import RodaPe from "./components/rodaPe";
import { BrowserRouter } from "react-router-dom"
import Router from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Cabecalho />
        <Router />
        <RodaPe />
      </BrowserRouter>
    </>
  );
}

export default App;
