import React, { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Staking = (props) => {
  const [amount, setAmount] = useState(0);
  const [earned, setearned] = useState(0);

  const sagestaking = props.sagestaking;
  const sagetoken = props.sagetoken;
  const account = props.account;

  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const stakeToken = async (event) => {
    event.preventDefault();
    // let amountETH = ethers.utils.parseEther(amount);
    await sagetoken.approve(sagestaking.address, amount);
    await sagestaking.Stake(amount);
    const earnedAmount = (await sagestaking.earned(account)).toString();
    setearned(earnedAmount);
    setAmount(0);
  };
  const claimToken = async () => {
    console.log(earned);
    await sagetoken.approve(sagestaking.address, earned);
    console.log(earned);
    await sagestaking.Claim();
    console.log("successful");
  };
  // console.log(earned);

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
        <h3 className="mt-4">You have earned {earned} SAG tokens</h3>
        <Button
          variant="primary"
          type="submit"
          className="mt-4"
          onClick={claimToken}
        >
          Claim Token
        </Button>
      </div>
      <Contact />
    </div>
  );
};

export default Staking;
