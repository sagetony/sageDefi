// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import Nav from 'react-bootstrap/Nav';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import { Button } from 'react-bootstrap';



function Header({logo}) {
    // const [isNone, setIsDisplay] = useState('')
    // const onclick = () => {
    //     if
    //     setIsDisplay('block')
    // }
  return (
    <div>
        <header id="header">
            <div className="header-fixed-height"></div>
            <div className="menu-area sticky-header">
            <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            {/* <div className="mobile-nav-toggler" onClick={onclick}><FaBars backgroundColor="red" /></div> */}
                            <div className="menu-wrap">
                                <nav className="menu-nav">
                                    <div className="logo">
                                        <a href="/"><img src={logo} alt="lOGO" /></a> 
                                    </div>
                                    <div className="navbar-wrap main-menu d-lg-flex">
                                        <ul className="navigation">
                                            <li className="active menu-item-has-children"><a href="#header" className="section-link">Home</a>
                                            </li>
                                            <li><a href="#about" className="section-link">About us</a></li>
                                            <li><a href="#sales" className="section-link">ICO</a></li>
                                            <li><a href="#roadmap" className="section-link">Staking</a></li>
                                            <li><a href="#contact" className="section-link">NFT</a></li>
                                            <li><a href="#contact" className="section-link">Admin</a></li>
                                            <li><a href="#contact" className="section-link">Team</a></li>
                                            <li><a href="#contact" className="section-link">Contact us</a></li>
                                        </ul>
                                    </div>
                                    <Button>Connect Wallet </Button>

                                    {/* <div className="header-action d-none d-md-block">
                                        <ul>
                                           
                                            <li className="header-btn"><a href="#connect" className="btn"></a></li>
                                        </ul>
                                    </div> */}
                                </nav>
                            </div>

                            <div className="mobile-menu">
                                <nav className="menu-box">
                                    <div className="close-btn"><FaTimes /></div>
                                    <div className="nav-logo"><a href="/"><img src={logo} alt="Logo" title="" /></a>
                                    </div>
                                    <div className="menu-outer">
                                    </div>
                                    <div className="social-links">
                                        <ul className="clearfix">
                                            <li><a href="#facebook"><FaFacebook /></a></li>
                                            <li><a href="#twitter"><FaTwitter /></a> </li>
                                            <li><a href="#instagram"><FaInstagram /></a></li>
                                            <li><a href="#linkedin"><FaLinkedinIn /></a></li>
                                            <li><a href="#youtube"><FaYoutube /></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="menu-backdrop"></div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    </div>
  )
}

export default Header

