import React,{useState,render} from 'react' //imr function || imrc class
import { Carousel } from 'react-bootstrap';
import Barre from "../BarreDePlace";


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      
      <Carousel activeIndex={index} onSelect={handleSelect}>
        
        <Carousel.Item>

          <img
            className="d-block w-100"
            src="/3.jpg"
            alt="First slide"
          />
                  
        <Carousel.Caption>
         <h3> <Barre /></h3>
            
        </Carousel.Caption>
        
        
        </Carousel.Item>
        <Carousel.Item>
          
        
          <img
            className="d-block w-100"
            src="/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption >
          <h3><Barre /></h3>

          </Carousel.Caption>
          
  
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/1.jpg"
            alt="Med Amine Blibech blibechmedamine@gmail.com"
          />
         
  
          <Carousel.Caption>
            <h3> <Barre /></h3>
          </Carousel.Caption>
          
        </Carousel.Item>
      </Carousel>
    );
  }
  
