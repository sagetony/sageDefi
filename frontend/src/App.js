import Home from "../src/pages/Home";
import PageNotFound from "../src/pages/PageNotFound";
import Admin from "../src/pages/Admin";
import Staking from "../src/pages/Staking";
import logo from "../src/assets/img/logo/logo.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import SagetokenAddress from "../src/abis/contractsData/SageToken-address.json";
import SagetokenAbi from "../src/abis/contractsData/SageToken.json";
import SagestakingAbi from "../src/abis/contractsData/Staking.json";
import SagestakingAddress from "../src/abis/contractsData/Staking-address.json";
import SageicoAbi from "../src/abis/contractsData/SageExchange.json";
import SageicoAddress from "../src/abis/contractsData/SageExchange-address.json";

function App() {
  const [account, setAccount] = useState(null);
  const [sagetoken, setSageToken] = useState(null);
  const [sageico, setSageico] = useState(null);
  const [sagestaking, setSagestaking] = useState(null);

  const WebHandler = useCallback(async () => {
    // get the account in metamask
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    // Get the provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get Signer
    const signer = provider.getSigner();
    // console.log(signer);

    // console.log("signer");

    // Helps Changes account when user switch accounts
    window.ethereum.on("accountsChanged", async function (accounts) {
      setAccount(account[0]);
      await WebHandler();
    });

    // get contracts
    const sagetokens = new ethers.Contract(
      SagetokenAddress.address,
      SagetokenAbi.abi,
      signer
    );
    setSageToken(sagetokens);

    const sageico = new ethers.Contract(
      SageicoAddress.address,
      SageicoAbi.abi,
      signer
    );
    setSageico(sageico);

    const sagestaking = new ethers.Contract(
      SagestakingAddress.address,
      SagestakingAbi.abi,
      signer
    );
    setSagestaking(sagestaking);
  }, [account]);

  useEffect(() => {
    WebHandler();
  }, [WebHandler]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                WebHandler={WebHandler}
                sageico={sageico}
                sagetoken={sagetoken}
                account={account}
                logo={logo}
              />
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/staking"
            element={
              <Staking
                sagestaking={sagestaking}
                account={account}
                logo={logo}
                WebHandler={WebHandler}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
