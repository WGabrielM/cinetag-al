import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaBase from "./pages/PaginaBase";
import Player from "./pages/Player";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<PaginaBase />}></Route>
        <Route index element={<Inicio />}></Route>
        <Route path="favoritos" element={<Favoritos />}></Route>
        <Route path=":id" element={<Player />}></Route>
        <Route path="*" element={<NaoEncontrada />}></Route>
      </Routes>
    
  );
}
