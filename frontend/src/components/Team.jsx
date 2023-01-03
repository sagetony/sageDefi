import React from 'react'
import Stella from "../assets/img/team/stella.jpg"
import Tony from "../assets/img/team/anthony.jpg"
import Nonny from "../assets/img/team/nonny.jpg"
import Kingdom from "../assets/img/team/kingdom.jpg"
const Team = () => {
  return (
    <div>
       <section class="team-area pt-130" id='team'>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6">
              <div class="section-title text-center mb-70 pt-300">
                <span class="sub-title">OUr team</span>
                <h2 class="title">
                  The Leadership <br />
                  <span>Team</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="team-item">
                <div class="team-thumb">
                  <img src={Tony} alt="" />
                </div>
                <div class="team-content">
                  <h2 class="title">Nwachukwu Anthony </h2>
                  <span>Blockchain Developer</span>
                  <ul class="team-social">
                    <li>
                      <a href="#d"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li>
                      <a href="#d"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#d"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#d"><i class="fab fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="team-item">
                <div class="team-thumb">
                  <img src={Nonny} alt="" />
                </div>
                <div class="team-content">
                  <h2 class="title">Nwosu Chinoso</h2>
                  <span>Product Designer</span>
                  <ul class="team-social">
                    <li>
                      <a href="#d"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li>
                      <a href="#d"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#d"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#d"><i class="fab fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="team-item">
                <div class="team-thumb">
                  <img src={Kingdom} alt="" />
                </div>
                <div class="team-content">
                  <h2 class="title">Eleru Kingdom</h2>
                  <span>No Code Developer</span>
                  <ul class="team-social">
                    <li>
                      <a href="#d"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li>
                      <a href="#f"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#d"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#d"><i class="fab fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="team-item">
                <div class="team-thumb">
                  <img src={Stella} alt="" />
                </div>
                <div class="team-content">
                  <h2 class="title">Agbo Stella</h2>
                  <span>Head of Marketing</span>
                  <ul class="team-social">
                    <li>
                      <a href="#s"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li>
                      <a href="#d"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#d"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#s"><i class="fab fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
