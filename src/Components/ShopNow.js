import React from 'react'
import Nav from './Nav'
import c1 from '../assets/car1.png'
import c2 from '../assets/car2.png'
import c3 from '../assets/car3.png'
import c4 from '../assets/car4.png'
import c5 from '../assets/c6.png'
import c6 from '../assets/c7.png'
import c7 from '../assets/c8.png'
import '../Components/shop.css'

import { useNavigate } from 'react-router-dom'


const ShopNow = () => {
  const navigate =useNavigate();
  return (
    <div>
      <Nav />
      <div class="card">
        <img src={c1} alt="Card Image" class="card-img" />
        <div class="card-content">
          <h2 class="card-title">2021 Nissan Leaf SL PLUS</h2>
          <p class="card-description">$18,894 $100 price drop</p>
        </div>
        <div className='content'>
          <div className='electric'>
          <button8  onClick={ ()=>navigate("/Buy") } href="" class="ele-text"><i class="fas fa-link"></i>Buy Now</button8>
            
          </div>
        </div>




      </div>
      <div class="card">
        <img src={c2} alt="Card Image" class="card-img" />
        <div class="card-content">
          <h2 class="card-title">Mercedes-Benz EQB 300</h2>
          <p class="card-description">$18,894 $100 price drop</p>
        </div>
        <div className='content'>
          <div className='electric'>
          <button8  onClick={ ()=>navigate("/Buy") } href="" class="ele-text"><i class="fas fa-link"></i>Buy Now</button8>
            
          </div>
        </div>




      </div>
      <div class="card">
        <img src={c3} alt="Card Image" class="card-img" />
        <div class="card-content">
          <h2 class="card-title">Jeep Wrangler 4xe</h2>
          <p class="card-description">$18,894 $100 price drop</p>
        </div>
        <div className='content'>
          <div className='electric'>
          <button8  onClick={ ()=>navigate("/Buy") } href="" class="ele-text"><i class="fas fa-link"></i>Buy Now</button8>
            
          </div>
        </div>




      </div>
      <div class="card">
        <img src={c4} alt="Card Image" class="card-img" />
        <div class="card-content">
          <h2 class="card-title">2021 Nissan Leaf SL PLUS</h2>
          <p class="card-description">$894 $100 price drop</p>
        </div>
        <div className='content'>
          <div className='electric'>
          <button8  onClick={ ()=>navigate("/Buy") } href="" class="ele-text"><i class="fas fa-link"></i>Buy Now</button8>
            
          </div>
        </div>




      </div>

      <div class="card">
        <img src={c5} alt="Card Image" class="card-img" />
        <div class="card-content">
          <h2 class="card-title">BMW i7</h2>
          <p class="card-description">$894 $100 price drop</p>
        </div>
        <div className='content'>
          <div className='electric'>
          <button8  onClick={ ()=>navigate("/Buy") } href="" class="ele-text"><i class="fas fa-link"></i>Buy Now</button8>
            
          </div>
        </div>




      </div>

      <div class="card">
        <img src={c6} alt="Card Image" class="card-img" />
        <div class="card-content">
          <h2 class="card-title">2021 Nissan Leaf SL PLUS</h2>
          <p class="card-description">$18,894 $100 price drop</p>
        </div>
        <div className='content'>
          <div className='electric'>
          <button8  onClick={ ()=>navigate("/Buy") } href="" class="ele-text"><i class="fas fa-link"></i>Buy Now</button8>
            
          </div>
        </div>




      </div>
      <div class="card">
        <img src={c7} alt="Card Image" class="card-img" />
        <div class="card-content">
          <h2 class="card-title">2021 Nissan Leaf SL PLUS</h2>
          <p class="card-description">$18,894 $100 price drop</p>
        </div>
        <div className='content'>
          <div className='electric'>
          <button8  onClick={ ()=>navigate("/Buy") } href="" class="text-ele"><i class="fas fa-link"></i>Buy Now</button8>
          </div>
        
        </div>




      </div>

    </div>
  )
}

export default ShopNow
