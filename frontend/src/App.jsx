import './App.css'
import Footer from './components/footer';
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/Banner";
import AboutUs from './components/Aboutus';
import Contactus from './components/Contactus';
import Joinourcommunity from './components/Joinourcommunity';
import Getmotivated from './components/Getmotivated';

function App() {


  return (
    <>
    <Router>
    <Navbar/>
    <Banner/>
    <Getmotivated/>
    <Joinourcommunity/>
    <AboutUs/>
    <Contactus/>
    <Footer/>
    </Router>
    </>
  )
}

export default App
