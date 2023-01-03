import Home from "../src/pages/Home";
import PageNotFound from "../src/pages/PageNotFound";
import Admin from "../src/pages/Admin";
import Staking from "../src/pages/Staking";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState(null);
  const [sagetoken, setSageToken] = useState(null);
  const [sageico, setSageico] = useState(null);
  const [sagestaking, setSagestaking] = useState(null);
  // Connect to Metamask
  const WebHandler = async () => {
    // get the account in metamask
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    // Get the provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get Signer
    const signer = provider.getSigner();
    
  };
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
