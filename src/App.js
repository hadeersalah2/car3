import Nav from "./Components/Nav"
import Cursol from "./Components/Cursol";
import Abou from "./Components/Abou";
import Brand from "./Components/Brand";
import Cards from "./Components/Cards"
import Old from "./Components/Old";
import Home from "./Components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from "./Components/Details"
import Details2 from "./Components/Details2"

import Card1 from "./Components/Card1"
import ShopNow from './Components/ShopNow'
import Buy from "./Components/Buy";
import Details3 from './Components/Details3'






function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Old" element={<Old />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Details2" element={<Details2 />} />
          <Route path="/Details3" element={<Details3 />} />
          <Route path="/Card1" element={<Card1 />} />
          <Route path="/ShopNow" element={<ShopNow />} />
          <Route path="/Buy" element={<Buy />} />



        </Routes>
      </BrowserRouter>






    </div>
  );
}

export default App;
