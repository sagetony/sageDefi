import { ethers } from 'ethers'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import aboutUsImageOne from "../assets/img/images/about_img01.png"
import aboutUsImageTwo from "../assets/img/images/about_img02.png"

const About = ({sageico, sagetoken}) => {
  const [amount, setAmount] = useState(0);

  const handleChange = async (event) => {

    setAmount(event.target.value);

  }


   const icoInvest = async(event) => {
    event.preventDefault();
    let amountETH = ethers.utils.parseEther(amount)
        await sageico.ICOInvest({ value: amountETH });
        console.log("Successful")
        setAmount(0)

    }

  return (
    <div>
      <section id="about" className="about-area pt-130 pb-130" style={{ marginTop: 100 }}>
        <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
                <img src={aboutUsImageOne} alt="" />
                <img
                src={aboutUsImageTwo}
                alt=""
                className="img-two"
                />
            </div>
            </div>
            <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
                <div className="section-title mb-30">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                    The World’s <span>Best Decentralized Finanace</span> Platform That Offers
                    Rewards
                </h2>
                </div>
                <p>
                The World’s Best Decentralized Finanace Platform That Offers Rewards and The
                platform helps investors to make easy to purchase and sell
                their tokens
                </p>
                {/* <a href="#about" className="btn"></a> */}
                {/* <Button onClick={icoInvest}>Purchase Tokens</Button> */}
                <Form onSubmit={icoInvest}>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Amount in ETH</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Amount of Token to Burn" value={amount} onChange={handleChange}
                        />
                      </Form.Group>
                    </div>
                  </div>
                   <Button type='submit' >Purchase Tokens</Button>
                </Form>

            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
  )
}

export default About
