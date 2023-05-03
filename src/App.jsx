import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './component/Home'
import Coins from './component/Coins';
import Exchanges from './component/Exchanges';
import CoinDetails from './component/CoinDetails';
import Header from './component/Header';
import Footer from './component/Footer';


function App() {


  return (
  <Router>
    <Header/>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Coins" element={<Coins/>} />
      <Route path="/Exchanges" element={<Exchanges />} />
      <Route path="/coin/:id" element={<CoinDetails />} />
    </Routes>
    <Footer/>
  </Router>
  );

 
}

export default App
