
import { useEffect, useState } from 'react';
import vid from '../assets/istockphoto-1226413184-640_adpp_is.mp4'
export default function CourseVideos() {
    const [Content, setContents] = useState([]);

    const contents =()=>{
        fetch("http://localhost:4000/contents",{
            method: "get",
        }).then((res)=>{
    
            res.json().then((data)=>{
              console.log(data)
              setContents(data[0])
            })
        })
    
    }
    
    useEffect(() => {
      contents()
    },[])
    
    return (
        <>

            <div className="text-center min-h-full flex flex-col items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
               <p class="text-5xl text-center mb-2 font-serif">
        Python
    </p>

                <video className="rounded-lg w-4/5 h-content" controls autoPlay="true">
                    <source  src={vid}type="video/mp4" />
                </video>

            </div>
        </>
    )
}
