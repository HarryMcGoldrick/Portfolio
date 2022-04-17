import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";

export const ImgCarousel = (props) => {
    const [index, setIndex] = useState(0);
    const { imgs } = props;
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imgs.map((img) => {
          return(
            <Carousel.Item>
            <Image
            fluid
            src={img}
            style={{border: "5px solid", borderColor: "white", borderRadius: "5px"}}

            />
            </Carousel.Item>
          )
        })} 
      </Carousel>
    );
  }