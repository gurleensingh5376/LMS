

import ReactIframe from 'react-iframe';

const GoogleSlides = () => {
    return (
        <div>
            <h1 className="text-center text-5xl font-serif mt-1 mb-2" >Learn Python</h1>
            <ReactIframe
                url="https://docs.google.com/presentation/d/1SuLq6RClo80dmQP-iXw9W12OzJJCXSln/embed?start=false&loop=false&delayms=3000"
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

