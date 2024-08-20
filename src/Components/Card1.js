import React, { useState } from 'react'
import Nav from './Nav';
import Data from './Data'
import Footer from './Footer';
import ShopNow from '../Components/ShopNow'

import { useNavigate } from 'react-router-dom'

const Card1 = () => {
  const navigate =useNavigate();
  const [filter ,setFilter]=useState('');
  const SearchText=(event)=>{
    setFilter(event.target.value)
  }
  let DataSearch =Data.Carddata.filter(item=>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  })

  return (
    <div>
    <Nav/>
      <div class="search-container">
  <input type="search" placeholder="Search..." aria-label="Search"
    value={filter}
    onChange={SearchText.bind(this)}
  />

</div>

<div class="container">
  <div class="row">
  {DataSearch .map((item,index)=>{
    return(
        <div class="col-md-3">
      <div class="card">
        <img src={item.img}  class="card-img-top" alt="Image 1"/>
        <div class="card-body">
          <h5  style={{textAlign:"center"}}class="card-title">{item.title}</h5>
          <button  onClick={ ()=>navigate("/ShopNow") } href="" class="ButtonAll"><i class="fas fa-link"></i>Shop Now</button>
        
        </div>
      </div>
    </div>
    
    
    )
  }
  )}
   
  </div>
</div>


<Footer/>
    </div>
  )
}

export default Card1
