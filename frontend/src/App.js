import Home from "../src/pages/Home";
import PageNotFound from "../src/pages/PageNotFound";
import Admin from "../src/pages/Admin";
import Staking from "../src/pages/Staking";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
