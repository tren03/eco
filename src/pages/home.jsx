import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import './homeStyles.css'
import OneCard from "../components/OneCard";
import AllCards from "../components/AllCards";
import Input from "../components/Input";
import Footer from "../components/Footer";

function Home(){

    return (
    <div className="container">
        <Navbar />
        <Hero />          
        <AllCards/>
        <Input/>
        <Footer/>
        
  </div> 
        

    )

}

export default Home