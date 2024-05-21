

import { useEffect, useState } from 'react';
import ReactIframe from 'react-iframe';

const GoogleSlides = () => {
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
        <div>
            <h1 className="text-center text-5xl font-serif mt-1 mb-2" >Learn Python</h1>
            <ReactIframe
                url={Content.pptLink}
                width="100%"
                height="600px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
            />
        </div>
    );
};

export default GoogleSlides;

