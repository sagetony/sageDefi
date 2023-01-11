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
    await sagetoken.approve(
      "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      amount
    );
    await sagestaking.Stake(amount);
    const earnedAmount = (await sagestaking.earned(account)).toString();
    setearned(earnedAmount);
    // console.log("Successful");
    // setAmount(0);
  };
  // const earnedAmountFunc = async () => {
  //   await sagestaking.Stake(amount);
  //   const earnedAmount = (await sagestaking.earned(account)).toString();
  //   setearned(earnedAmount);
  // };
  // useEffect(() => {
  //   earnedAmountFunc();
  // });

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
      </div>
      <Contact />
    </div>
  );
};

export default Staking;
