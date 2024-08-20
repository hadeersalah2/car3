import React from 'react'
import car1 from '../assets/Card1.png'
import car4 from '../assets/Card2.png'
import '../Components/cursol.css'


const Cursol = () => {
    return (
   
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>

                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={car4} class="d-block " alt="igfd" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            <button className='cursol-btn'>Explore Our Inventory</button>
                        </div>
                    </div>
                    
                    <div class="carousel-item">
                
                        <img src={car1} class="d-block  " alt="fssd" />
                        <div class="carousel-caption d-none d-md-block">
                           
                            <p>Some representative placeholder content for the third slide.</p>
                            <button className='cursol-btn'>Explore Our Inventory</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
     
    )
}

export default Cursol
