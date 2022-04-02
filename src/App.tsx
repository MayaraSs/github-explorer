import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

// BrowserRouter -> funciona como o endereço inserido na rota. Exemplo /repository

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
