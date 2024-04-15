import logo from './assets/logo.png'
import { useNavigate } from 'react-router-dom'
import style from'./Css/Homepage.module.css'
export default function HomePage() {
    const Navigate = useNavigate();
   
  return (
    <div>
        <nav className='bg-white-700 px-4 py-4 flex justify-between '>
        <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"  data-aos-once="false" >
        <div className='flex items-center text-xl'>

         <img className={style.logo}src={logo} alt=''/><span className=' font-semibold' style={{ fontSize:"32px", fontWeight:"bolder" ,transform: "translateX(-25%)",margin:"12px" }}>Study</span><span className=' font-semibold' style={{ fontSize:"32px",color:"#fca5a5", fontWeight:"bolder" ,transform: "translateX(-25%)" }}>Buddy</span>
        </div>
        </div>

        <div className='flex items-center gap-x-5'>
          {/* Search bar */}
          <div className='relative'>
          <button
        onClick={()=>
        {
            Navigate('/Register')
        }}
      type="button"
      className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-zinc-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    
    >
      Sign up
    </button>
            </div>
          {/* User profile */}
          <div className='flex items-center gap-x-5'>
            <div className='relative'>
            <button
        onClick={()=>
        {
            Navigate('/Login')
        }}
      type="button"
      className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-zinc-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >Log in
    </button>
            </div>
          </div>
        </div>
      </nav>

      

        <div >
      <div className={style.image} >
      <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"  data-aos-once="false" data-aos-anchor-placement="top-center">
        <div style={{fontSize:"47px",paddingTop:"7vh" ,paddingLeft:"5vh"}}>
       <span style={{color:"#fca5a5"}}>L</span><span style={{color:"black"}}>everage,</span> <span style={{color:"#fca5a5" }}>M</span ><span style={{color:"black"}}>aster,</span><span style={{color:"#fca5a5" }}> S</span><span style={{color:"black"}}>ucceed
        <br></br>
         Explore Our <span style={{color:"#fca5a5", }}>Study Buddy</span> Learning 
         <br></br>
         Platform!</span>
        
         </div>
         <div  style={{fontSize:"19.7px",paddingTop:"2vh" ,paddingLeft:"5vh", color:"black"}}>
         <p >Welcome to our innovative online learning platform, where knowledge knows</p>
         <p>  no bounds. Explore a dynamic space designed to empower and inspire</p>
         <p> learners of all backgrounds. Join us on a journey of discovery, growth, and</p>
         <p>achievement,as we pave the way for a brighter future together!</p>
        </div>
        <div style={{paddingTop:"4vh", paddingLeft:"5vh"}}>
        <button
        onClick={()=>
        {
            Navigate('/Login')
        }}
      type="button"
      className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-zinc-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >Get Started
    </button>



        </div>
        </div>
        </div>
     
       </div>
    </div>
  )
}
