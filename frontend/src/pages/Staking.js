import React, { useState } from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ethers } from "ethers";

const Staking = (props) => {
  const [amount, setAmount] = useState(0);
  const sagestaking = props.sagestaking;

  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const stakeToken = async (event) => {
    event.preventDefault();
    // let amountETH = ethers.utils.parseEther(amount);

    await sagestaking.Stake(amount);
    // console.log("Successful");
    // setAmount(0);
  };
  return (
    <div>
      <Header {...props} />
      <div className="container">
        <h2 style={{ textAlign: "center", marginTop: 50 }}>
          Stake your SAG Token
        </h2>
        <h5>Stake Token to earn interest</h5>
        <Form onSubmit={stakeToken}>
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount of Token</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Amount of Token"
                  value={amount}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>

          <Button variant="primary" type="submit">
            Stake Token
          </Button>
        </Form>
      </div>
      <Contact />
    </div>
  );
};

export default Staking;
