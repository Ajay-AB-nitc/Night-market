import { Routes, Route } from "react-router-dom";
import SellerDashboard  from './components/SellerDashboard.jsx'
import SellerDetails from "./components/SellerDetails.jsx";
import SellerList from "./components/LandingPage.jsx";


function App(){
  return(
    <Routes>
      <Route path="/sellerDashboard" element={<SellerDashboard/>}/> 
      <Route path="/sellerDetails" element={<SellerDetails/>}/>
      <Route path="/" element={<SellerList/>}/>
    </Routes>
  );
}

export default App;
