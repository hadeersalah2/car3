import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Card.css'
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"
import c6 from "../assets/c6.png"
import c7 from "../assets/c7.png"

const CardComponent = () => {
  return (
    
    <div className="container">
    <h6 className='p-home'>Featured Cars For You</h6>
      <div className="row">
        <div className="col-md-4">
          <div className="card3">
            <img
              className="card-img-top"
              src={c5}
              alt="Card image cap"
            />
            <div className="card-body3">
              <h5 className="card-title">MG ZS 2024</h5>
              <p className="card-text">Price 1,020,000 EGP</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card3">
            <img
              className="card-img-top"
              src={c1}
              alt="Card image cap"
            />
            <div className="card-body3">
              <h5 className="card-title">T ROC 2024</h5>
              <p className="card-text">Price 1,790,000 EGP</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card3">
            <img
              className="card-img-top"
              src={c4}
              alt="Card image cap"
            />
            <div className="card-body3">
            <h5 className="card-title">T ROC 2024</h5>
            <p className="card-text">Price 1,790,000 EGP</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card3">
            <img
              className="card-img-top"
              src={c5}
              alt="Card image cap"
            />
            <div className="card-body3">
              <h5 className="card-title">Kia 2024</h5>
              <p className="card-text">2,289,900 EGP</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card3">
            <img
              className="card-img-top"
              src={c6}
              alt="Card image cap"
            />
            <div className="card-body3">
              <h5 className="card-title">Huenda</h5>
              <p className="card-text">1,750,000 EGP</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card3">
            <img
              className="card-img-top"
              src={c7}
              alt="Card image cap"
            />
            <div className="card-body3">
              <h5 className="card-title">Volkswegen 2025</h5>
              <p className="card-text">730,000 EGP.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
