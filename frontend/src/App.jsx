import './App.css'
import Footer from './components/footer';
import Navbar from "./components/navbar";
import ErrorPage from "./components/404ErrorPage"
import { BrowserRouter as Router } from "react-router-dom";


function App() {


  return (
    <>
    <Router>
<Navbar/>
<ErrorPage/>

<Footer/>
</Router>
    </>
  )
}

export default App
