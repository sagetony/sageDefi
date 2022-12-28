import React from 'react'
import aboutUsImageOne from "../assets/img/images/about_img01.png"
import aboutUsImageTwo from "../assets/img/images/about_img02.png"

const About = () => {
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
                <a href="#about" className="btn">Purchase Tokens</a>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
  )
}

export default About
