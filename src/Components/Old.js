import React from 'react'
import Nav from './Nav';
import './Old.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Cardold from './Cardold';


const Old = () => {
  
  return (
    <div>
    <Nav/>
      <div class="container3">
 <div class="wrapper3">
   <div class="banner-image"> </div>
   <h1> Toyota Supra</h1>
   <p>Lorem ipsum dolor sit amet, <br/>
     consectetur adipiscing elit.</p>
  </div>
  <div class="button-wrapper3"> 
 

  <button className="btn3 outline3" >
      DETAILS
    </button>

  </div>
    </div>
    <Cardold/>
    <Footer/>
</div>
   
  )
}

export default Old
