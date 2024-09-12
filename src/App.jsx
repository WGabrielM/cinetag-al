import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";

import "./App.css";
import FavoritosProvider from "./contextos/Favoritos";

function App() {
  return (
    <BrowserRouter>
      <FavoritosProvider>
        <AppRoutes />
      </FavoritosProvider>
    </BrowserRouter>
  );
}

export default App;
