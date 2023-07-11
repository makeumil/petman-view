import Slide from './Slide';
import FuncComponent from './Func';

const Test = ()=>{
    const sliders = [ '/upload/puppy1.jpg', 
                     '/upload/puppy2.jpg', 
                     '/upload/puppy3.jpg' ];

	return (
		<>
            <Slide content={sliders}/>
            {/* <FuncComponent content={sliders}/> */}
        </>
    );
};


export default Test;        