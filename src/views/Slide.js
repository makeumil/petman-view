import React, { Component } from "react";
import Slider from "react-slick";
import styles from 'slick-carousel/slick/slick.css';
import theme from 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";
import { ReactComponent as Next } from "../svg/right.svg";
import { ReactComponent as Prev } from "../svg/left.svg";

function Slide(props) {
  let { content } = props;   

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  
    nextArrow: (
        <Div>
          <Next />
        </Div>
      ),
      prevArrow: (
        <DivPre>
          <Prev />
        </DivPre>
      ),
  };

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



const StyledSlider = styled(Slider)`

    position: relative;
    .slick-prev::before,
    .slick-next::before {
    opacity: 0;
    display: none;
    }
    .slick-list{

        width: 100%;
        margin: 0 auto;
    }
    .slick-dots{
        bottom: 100px;
        margin-top: 200px;
    }
    .slick-dots li{
        margin: 15px;
    }    
    .slick-dots li button:before{
        font-size: 40px;
        color: wheat;
    }
    .slick-slide div {
        //슬라이더  컨텐츠
        cursor: pointer;
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

const DivPre = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 16px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;

const Div = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  right: 16px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
  opacity: 0.8;
`;



export default Slide;