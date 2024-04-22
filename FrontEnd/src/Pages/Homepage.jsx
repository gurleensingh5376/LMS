import logo from '../assets/logo copy.svg'
import { useNavigate } from 'react-router-dom'
import style from'../Css/Homepage.module.css'
import sideimg from '../assets/sideimg.svg'
export default function HomePage() {
    const Navigate = useNavigate();
   
  return (
    <div className="flex flex-col h-screen bg-slate-100">
        <nav className=' px-4 py-4 flex justify-between '>
        
        <div className="flex items-center">
  <img className={` ${style.logo}`} src={logo} alt='logo'/>
  <span className='font-bold text-3xl ml-2 bg-gradient-to-r from-black via-grey to-sky-400 inline-block text-transparent bg-clip-text'>
    Study 
  </span>
  <span className='font-bold text-3xl ml-2'>
    Buddy
  </span>
</div>


        <div className='flex items-center gap-x-5'>
          <div className='relative'>
          <button
        onClick={()=>
        {
            Navigate('/Registeration')
        }}
      type="button"
      className="text-white bg-black shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  "
    
    >
      Sign up
    </button>
            </div>
          <div className='flex items-center gap-x-5'>
            <div className='relative'>
            <button
        onClick={()=>
        {
            Navigate('/Login')
        }}
      type="button"
      className="text-white bg-black shadow-lg shadow-6black-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  "
      >Log in
    </button>
            </div>
          </div>
        </div>
      </nav>

      

        <div className='px-4 py-4 flex justify-between  grid grid-cols-2'>
          <div className='gap-6'>
   <div style={{fontSize:"47px",paddingTop:"7vh" ,paddingLeft:"5vh"}}>
       <span style={{color:"#0284c7"}}>L</span><span style={{color:"black"}}>everage,</span> <span style={{color:"#0284c7" }}>M</span ><span style={{color:"black"}}>aster,</span><span style={{color:"#0284c7" }}> S</span><span style={{color:"black"}}>ucceed
        <br></br>
         Explore Our <span style={{color:"#0284c7", }}>Study Buddy</span> Learning 
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
      className="text-white bg-black shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  "
      >Get Started
    </button>
    </div>


        </div>
        <div className='justify-self-end'>
          <img src={sideimg} className='h-full ' />
        </div>
        </div>
        </div>
     
       
    
  )
}
