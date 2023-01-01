import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact-area pt-70 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-70">
                <span className="sub-title">Contact</span>
                <h2 className="title"><span>Contact</span> Sage Defi</h2>
              </div>
            </div>
          </div>
          <div className="contact-info-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="contact-info-item">
                  <div className="icon">
                    <span className="icon-background"></span>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="content">
                    <p>
                      sagetony224@gmail.com <br />
                      uchetony224@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="contact-info-item">
                  <div className="icon">
                    <span className="icon-background"></span>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="content">
                    <p>
                      +234 81029836<br />
                      +998 765 775 34
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="contact-info-item">
                  <div className="icon">
                    <span className="icon-background"></span>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="content">
                    <p>Location: <br />Delta State</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap">
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-grp">
                    <input type="text" placeholder="Enter your Name" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-grp">
                    <input
                      type="email"
                      placeholder="Enter you email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-grp">
                <textarea
                  name="massage"
                  placeholder="Enter your massage"
                ></textarea>
              </div>
              <div className="submit-btn text-center">
                <button type="submit" className="btn">Send Massage</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
