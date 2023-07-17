import React, { Component, useState  } from "react";
import Slider from "react-slick";
import styles from 'slick-carousel/slick/slick.css';
import theme from 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";
import { ReactComponent as Next } from "../svg/right.svg";
import { ReactComponent as Prev } from "../svg/left.svg";

function Slide(props) {

  const { content } = props;    

  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen) 
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    // initialSlide: 2,
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
                    <CardImg src={image} onClick={openModalHandler}/> 
                  </CardWrap>   
               </CardInfo> 
            );
          })}
        </StyledSlider>
     

        {isOpen ? 
        <div className={styles.carousel}>
        <ModalBackdrop>         
            <ModalView onClick={(e) => e.stopPropagation()}>
              <ExitBtn onClick={openModalHandler}>x</ExitBtn>
              <StyledSlider {...settings}>
                    <img src='/upload/puppy10.jpg'/> 
              </StyledSlider>

            </ModalView>
          </ModalBackdrop> 
          </div>
          : null
        }

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


// 모달 css
const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;
`;

const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 999; //위치지정 요소
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  // background-color: rgba(0,0,0,0.4);
  background-color: rgb(20, 20, 20);
  border-radius: 10px;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
  width: 100%;
  height: 100%;
`;

const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
  width: 100%;
  height: 100%;
`;

const ExitBtn = styled(ModalBtn) `
  background-color : black;
  border-radius: 10px;
  text-decoration: none;
  margin: 10px;
  width: 50px;
  height: 50px;
  display : flex;
  justify-content : top;
  align-items : left;
  color: white;
  font-size: 3rem;
`;

const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  align-items: left;
  vertical-align: top;
  flex-direction: column;
  border-radius: 20px;
  width: 100%;
  heigth: 100%;

 `;

export default Slide;