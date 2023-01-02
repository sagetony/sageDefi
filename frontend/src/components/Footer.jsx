import React from 'react'
import { FaYoutube, FaTwitter, FaFacebook, FaSkype} from 'react-icons/fa';


const Footer = ({logo}) => {
  return (
    <div>
      <footer>
  <div className="footer-area">
    <div className="container">
      <div className="footer-scroll-wrap">
        <button className="scroll-to-target" data-target="html">
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
      <div className="footer-top">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
              <a href="#d" className="f-logo"
                ><img src={logo} alt=""
              /></a>
              <div className="footer-content">
                <p>
                  A new way to make the payments easy, reliable and 100%
                  secure. claritatem itamconse quat. Exerci tationulla
                </p>
                <ul className="footer-social">
                  <li>
                    <a href="#d"><FaYoutube /></a>
                  </li>
                  <li>
                    <a href="#d"><FaTwitter /></a>
                  </li>
                  <li>
                    <a href="#d"><FaFacebook /></a>
                  </li>
                  <li>
                    <a href="#d"><FaSkype /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-5 col-sm-6">
            <div className="footer-widget wow fadeInUp" data-wow-delay=".4s">
              <h4 className="fw-title">Useful Links</h4>
              <div className="footer-link">
                <ul>
                  <li><a href="#d">Contact us</a></li>
                  <li><a href="#d">How it Works</a></li>
                  <li><a href="#d">Create</a></li>
                  <li><a href="#d">Explore</a></li>
                  <li><a href="#d">Terms & Services</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-6">
            <div className="footer-widget wow fadeInUp" data-wow-delay=".6s">
              <h4 className="fw-title">Community</h4>
              <div className="footer-link">
                <ul>
                  <li><a href="#d">Help Center</a></li>
                  <li><a href="#d">Partners</a></li>
                  <li><a href="#d">Suggestions</a></li>
                  <li><a href="#d">Blog</a></li>
                  <li><a href="#d">Newsletters</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="footer-widget wow fadeInUp" data-wow-delay=".8s">
              <h4 className="fw-title">Subscribe Newsletter</h4>
              <div className="footer-newsletter">
                <p>
                  Exerci tation ullamcorper suscipit lobortis nisl aliquip
                  ex ea commodo
                </p>
                <form action="#d">
                  <input
                    type="email"
                    placeholder="sagetony224@gmail.com"
                    required
                  />
                  <button type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="copyright-text">
              <p>Copyright &copy; {new Date().getFullYear()}. All Rights Reserved SageDefi</p>
            </div>
          </div>
          <div className="col-lg-6 d-none d-sm-block">
            <div className="footer-menu">
              <ul>
                <li><a href="#d">Terms and conditions</a></li>
                <li><a href="#d">Privacy policy</a></li>
                <li><a href="#d">Login / Signup</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
