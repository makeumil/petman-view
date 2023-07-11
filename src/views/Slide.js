import React, { Component } from "react";
import Slider from "react-slick";
import styles from 'slick-carousel/slick/slick.css';
import theme from 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";

function Slide(props) {
  let { content } = props;   

  return (
      <div className={styles.carousel}>
        <StyledSlider {...settings}>
          {content.map((image)=>{
            return (
               <CardInfo>
                <CardWrap>
                    <CardImg src={image} /> 
                </CardWrap>   
               </CardInfo> 
            );
          })}
        </StyledSlider>
      </div>
    );

}

export default Slide;


const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
};

const StyledSlider = styled(Slider)`
    .slick-list{
        width: 100%;
        margin: 0 auto;
    }
    .slick-slide div{

    }
    .slick-dots{
        bottom: 100px;
        margin-top: 200px;
    }
    .slick-track{

    }
    .slick-dots li button:before{
        font-size: 20px;
        color: white;
    }
`;

const CardInfo = styled.div`
    width: 100%; 
    height: 100%;
`;
const CardWrap = styled.div`
    position: relative;
    padding-top: 120%;  
    overflow: hidden; 
`;
const CardImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    object-fit:cover;
`;
const CardText = styled.p`
    padding: 20px;
    font-size: 20px;
    font-weight: bolder;
    text-align: center;
`;
const SlideTitle = styled.text`
    padding: 60px 0px 50px 0px;
    font-align: center;
    font-size: 30px;
    font-weight: bolder;
`;