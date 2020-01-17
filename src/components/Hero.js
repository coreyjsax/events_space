import React from 'react'
import { Carousel } from 'antd';

function onChange(a, b, c) {
    console.log(a, b, c);
  }

const Hero = (props) => {
    return (
        <Carousel afterChange={onChange}>
            
                <img width="1920" src="https://www.fillmurray.com/1920/694" />
            
           
                <img width="1920" src="https://www.fillmurray.com/1920/694" />
            
            
                <img width="1920" src="https://www.fillmurray.com/1920/694" />
            
            
                <img width="1920" src="https://www.fillmurray.com/1920/694" />
            
        </Carousel>
    )
}
export default Hero
