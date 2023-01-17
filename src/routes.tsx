import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import MinhaConta from "./pages/MinhaConta";
import { BaseLayout } from "./components/BaseLayout";

function Router() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossomenu" element={<Menu />} />
        <Route path="/sobrenos" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/minhaconta" element={<MinhaConta />} />
      </Routes>
    </BaseLayout>
  );
}
export default Router;
