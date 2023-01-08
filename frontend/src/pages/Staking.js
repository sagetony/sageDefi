import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Staking = (props) => {
  return (
    <div>
      {/* {console.log({ account })}; */}
      <Header {...props} />
      <div className="container">
        <h2 style={{ textAlign: "center", marginTop: 50 }}>
          Stake your SAG Token
        </h2>
        <h5>Stake Token to earn interest</h5>
        <Form>
          <div className="row">
            <div className="col-md-6">
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
            Stake Token
          </Button>
        </Form>
      </div>
      <Contact />
    </div>
  );
};

export default Staking;
