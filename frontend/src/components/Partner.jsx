import React from 'react'
import polygon from "../assets/img/partner/polygon-matic-logo.png"
import eth from "../assets/img/partner/ethereum-logo-portrait-purple.png"
import chainlink from "../assets/img/partner/Chainlink-Logo-Blue.png"
import aave from "../assets/img/partner/Aave-Crypto-Logo-PNG-Image.png"
import github from "../assets/img/partner/partner_img04.png"
const Partner = () => {
  return (
    <div>
        <div class="partner-area pb-130">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title text-center mb-10">
                <span class="sub-title">TRUSTED BY INDUSTRY LEADERS</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="partner-wrap">
                <ul>
                  <li>
                    <img src={polygon} alt="" />
                  </li>
                  <li>
                    <img src={eth} alt="" />
                  </li>
                  <li>
                    <img src= {aave} alt="" />
                  </li>
                  <li>
                    <img src= {chainlink} alt="" />
                  </li>
                  <li>
                    <img src= {github} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
