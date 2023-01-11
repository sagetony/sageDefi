import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../components/Header";
import Team from "../components/Team";

const Admin = (props) => {
  const [amount, setAmount] = useState(0);
  const sagetoken = props.sagetoken;
  // const sageico = props.sageico;

  const handleChange = async (event) => {
    setAmount(event.target.value);
  };
  const tokenApprove = async (event) => {
    event.preventDefault();
    let decimals = (await sagetoken.decimals()).toString();
    // console.log(decimals);

    await sagetoken.approve(
      "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      amount * (10 * decimals)
    );
    console.log("Successful");
    setAmount(0);
  };
  return (
    <div>
      <Header {...props} />
      <div className="container">
        <h2 style={{ textAlign: "center", marginTop: 50 }}>
          My Admin Dashboard
        </h2>
        <h5>Approve Token</h5>
        <Form onSubmit={tokenApprove}>
          <div className="row">
            <div className="col-md-4">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount of Token</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Amount of Token to Approve"
                  value={amount}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>

          <Button variant="primary" type="submit">
            Approve Token
          </Button>
        </Form>
        <br></br>
        <h5>Burn Token</h5>
        <Form>
          <div className="row">
            <div className="col-md-4">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount of Token</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Amount of Token to Burn"
                />
              </Form.Group>
            </div>
          </div>

          <Button variant="primary" type="submit">
            Burn Token
          </Button>
        </Form>
        <h4 className="mt-4">Mint Token</h4>
        <Form>
          <div className="row">
            <div className="col-md-4">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount of Token</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Amount of Token to Mint"
                />
              </Form.Group>
            </div>
          </div>

          <Button variant="primary" type="submit">
            Mint
          </Button>
        </Form>
      </div>
      <Team />
    </div>
  );
};

export default Admin;
