import React, { useRef } from "react";
import Nav from "./Nav";
import Slider from "react-slick";
import o8 from "../assets/used1.png"
import o7 from "../assets/used2.png"
import o6 from "../assets/used3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";
import '../Components/Details.css'

function PreviousNextMethods() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (
        <div>
        <Nav/>
        <div className="cover" >
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                <div key={1}>
                    <img className="img1" src={o8}></img>
                </div>
                <div key={2}>
                    <img className="img1" src={o7}></img>
                </div>
                <div key={3}>
                    <img className="img1" src={o6}></img>
                </div>

            </Slider>
            <div style={{ textAlign: "center" }}>
                <button className="button2" onClick={previous}>
                    Previous
                </button>
                <button className="button2" onClick={next}>
                    Next
                </button>
            </div>
            <div class="card5" >
                <div class="card-body5">
                    <h5 class="card-title5">Model: Honda 2022</h5>
                    <h5 class="card-title5">
                    Engine: Electric</h5>
                    <h5>Ext. color: Gray</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Price 1,20333EGP</h6>
                    <div className="btnn">
                    <button className="button5">Send Message</button>
                    <button className="button6">Call</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
        
    );
}

export default PreviousNextMethods;
