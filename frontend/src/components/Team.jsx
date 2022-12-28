import React from 'react'
import Stella from "../assets/img/team/team_img05.png"
import Tony from "../assets/img/team/anthony.jpg"
import Nonny from "../assets/img/team/team_img02.png"
import Kingdom from "../assets/img/team/team_img03.png"
const Team = () => {
  return (
    <div>
       <section class="team-area pt-130" >
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
                  <span>Founder & CO</span>
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
                  <span>Product Manager</span>
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
                  <span>Vp People</span>
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
