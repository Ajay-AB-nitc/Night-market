import { Routes, Route } from "react-router-dom";
import SellerDashboard  from './components/SellerDashboard.jsx'
import SellerDetails from "./components/SellerDetails.jsx";


function App(){
  return(
    <Routes>
      <Route path="/sellerDashboard" element={<SellerDashboard/>}/> 
      <Route path="/" element={<SellerDetails/>}/>A
    </Routes>
  );
}

export default App;
