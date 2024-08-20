import React, { useRef } from "react";
import Slider from "react-slick";
import d1 from "../assets/d1.png"
import d2 from "../assets/d2.png"
import '../Components/Details.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer"
import Nav from "./Nav";

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
        <div className=" cover" style={{ width: '60%', margin: 'auto', borderRadius: '100px' }}>
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                <div key={1}>
                    <img className="img1" src={d1}></img>
                </div>
                <div key={2}>
                    <img className="img1" src={d2}></img>
                </div>
                <div key={3}>
                    <img className="img1" src={d1}></img>
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
                    <button className="button5">Send Message</button>
                    <button className="button6">Call</button>

                 
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default PreviousNextMethods;
