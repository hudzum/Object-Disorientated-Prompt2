import PastryCanvas from "./canvas/Pastry"
import PencilBookCanvas from "./canvas/PencilBook"
import {Link} from "react-router-dom"
const Hero = () => {

    
    return (
    <div className= " mt-0 bg-cover bg-center h-screen bg-[url('/Users/admin/Documents/HackathonProject/frontend/src/assets/backgroundHero.svg')]" >
    <section>
   
      <div>
        <h1 className="text-center text-9xl font-bold pt-5">COPY <span className = "text-[#4F3319]">PASTRY</span></h1>
        <p className= {` mt-2 text-white-100`}>
    
        </p>
      </div>

   
    <div className = "flex mx-30">
        <div className ="w-1/2 h-500">
        <Link to = "/find">
            <PastryCanvas />
          </Link>
        </div>
        <div className ="w-1/2 h-400">
          <Link to ="/form">
            <PencilBookCanvas/>
            </Link>
        </div>
    
    </div>
    
        
  </section>
  </div>
    )
  }
  
  export default Hero