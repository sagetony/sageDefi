import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Banner = ({sageico, sagetoken }) => {
    // const [symbol, setSymbol] = useState(null)
    // const [tokenamount, setTokenamount] = useState(null)
    // const [totaltoken, setTotaltoken] = useState(null)

    // const icoInvest = async () => {
    //     await sageico.ICOInvest();
    // }
    //  const loadsageDefi = useCallback (async () => {
    //     const tokenSymbol = await sagetoken;
    //     setSymbol(tokenSymbol)
    //     console.log(await sagetoken)
    //     console.log("dsd")

    //     const tokenAmount = await sageico.getTokenAmount();
    //     setTokenamount(tokenAmount)
    //     const totalToken = await sageico.getTokenPurchase();
    //     setTotaltoken(totalToken)}, [sagetoken, sageico])
     
    // useEffect(() => {
    //     const aa = async () => {
    //         console.log(await sagetoken.address)

    //         console.log(await sagetoken.abi)

    //     }
    //     aa()
    // }, [])

  return (
    <div>
        <section className="banner-area banner-bg">
            <div className="banner-shape-wrap">
            <img
                src="assets/img/banner/banner_shape01.png"
                alt=""
                className="img-one"
            />
            <img
                src="assets/img/banner/banner_shape02.png"
                alt=""
                className="img-two"
            />
            <img
                src="assets/img/banner/banner_shape03.png"
                alt=""
                className="img-three"
            />
            </div>
            <div className="container">
  <div className="row justify-content-center">
      <div className="col-lg-10">
      <div className="banner-content text-center">
          <img src="assets/img/icon/fire.png" alt="" />
          <h2 className="title">
          Unlock the power of Blockchain<span> Decentralized</span> Finance
          </h2>
          {/* <p style={{ color: "white" }}>
          Build faster and smarter with APIs that bridge the development gap between Web2 and Web3.
          </p> */}
      </div>
      <div className="banner-progress-wrap">
          <ul>
          <li>Pre Sell</li>
          <li>Soft Cap</li>
          <li>Bonus</li>
          </ul>
          {/* <div className="progress">
          <div
              className="progress-bar"
              role="progressbar"
              style="width: 75%"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
          ></div>
          </div> */}
          <h4 className="title">
          {/* {totaltoken} Purchased <span>1 {symbol} = {tokenamount} ETH</span> */}
          </h4>
      </div>
      </div>
  </div>
  {/* <div className="row justify-content-center">
      <div className="col-xl-10">
      <div className="banner-countdown-wrap text-center">
          <h2 className="title">ICO Will Start In..</h2>
          <div className="coming-time" data-countdown="2023/1/29"></div>
      </div>
      </div>
  </div> */}
</div>
        </section>
    </div>
  )
}

export default Banner
