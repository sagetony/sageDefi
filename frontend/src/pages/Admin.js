import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../components/Header";
import Team from "../components/Team";

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 style={{ textAlign: "center", marginTop: 50 }}>
          My Admin Dashboard
        </h2>
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
