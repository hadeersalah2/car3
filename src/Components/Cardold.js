import React from 'react'
import o8 from "../assets/used1.png"
import o7 from "../assets/o7.png"
import o6 from "../assets/o6.png"
import d1 from "../assets/d1.png"
import f1 from "../assets/f1.png"
import Nav from './Nav'
import Footer from './Footer'

import { useNavigate } from 'react-router-dom'
import Details from './Details'

const Cardold = () => {
    const navigate =useNavigate();
  return (
    <div>
    <Nav/>
    <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
        <img src={o8} class="card-img-top" alt="Image 2"/>
          <div class="card-body">
            <h5 class="card-title">Honda </h5>
          
            <button  onClick={ ()=>navigate("/Details") } href="" class="btn btn-primary"><i class="fas fa-link"></i>Details</button>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
          <img src={d1} class="card-img-top" alt="Image 2"/>
          <div class="card-body">
            <h5 class="card-title">BMW X5</h5>
            
            <button  onClick={ ()=>navigate("/Details2") } href="" class="btn btn-primary"><i class="fas fa-link"></i>Details</button>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
          <img src={f1} class="card-img-top" alt="Image 3"/>
          <div class="card-body">
            <h5 class="card-title">Sozoki</h5>
          
            <button  onClick={ ()=>navigate("/Details3") } href="" class="btn btn-primary"><i class="fas fa-link"></i>Details</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Cardold
