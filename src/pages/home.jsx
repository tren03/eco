import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import './homeStyles.css'
import OneCard from "../components/OneCard";
import AllCards from "../components/AllCards";

function Home(){

    return (
    <div className="container">
        <Navbar />
        <Hero />
          <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',paddingBottom:'20px'}}>
    <AllCards/>
  </div> 
        
    </div>

    )

}

export default Home