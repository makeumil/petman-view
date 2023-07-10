import { Link } from 'react-router-dom';
import styles from '../css/Main.module.css';
import React, {useState, useEffect} from 'react';



const Main = (props) => {
	return (
		<>
			<div class={styles.header}>
				<div class={styles.header__wrapper}>
					<div class={styles.header__start}>         
						<a href='/'>
							<img class={styles.header__search} src='/images/search2.png' alt=''></img>  
						</a>	
						<span class={styles.header__area}>인천시 > 계양구</span>						
					</div>
					<div class={styles.header__end}> 
						<a href='/'>
							<img class={styles.header__search} src='/images/menu.png' alt=''></img>
							<img class={styles.header__alarm} src='/images/alarm2.png' alt=''></img>
						</a>
					</div>
				</div>	
			</div>

			<nav class={styles.nav}>
				<ul class={styles.nav__wrapper}> 
					<a href='/'>     
						<li> 
							<img class={styles.nav__icon} src='/images/home2.png' alt=''/>   
							<span class={styles.nav__menu}>홈</span>
						</li>
					</a>		
					<a href='/'>     
						<li> 
							<img class={styles.nav__icon} src='/images/vlog2.png'  alt=''/>   
							<span class={styles.nav__menu}>펫매니저</span>
						</li>
					</a>	
					<a href='/'>    
						<li> 
							<img class={styles.nav__icon} src='/images/parcel2.png'  alt=''/>
							<span class={styles.nav__menu}>분양정보</span>  
						</li>
					</a>	
					<a href='/'>        
						<li> 
							<img class={styles.nav__icon} src='/images/position2.png'  alt=''/>
							<span class={styles.nav__menu}>지역정보</span>
						</li>
					</a>
					<a href='/'>    
						<li>
							<img class={styles.nav__icon} src='/images/user2.png'  alt=''/>    
							<span class={styles.nav__menu}>내정보</span>
						</li>
					</a>	
				</ul>			
			</nav> 

			<section class={styles.thumbs}> 
				<div class={styles.thumbs__wrapper}> 
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy1.jpg'  alt=''/>
							</a>
						</div>		
							
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>  
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	

							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>								
						</div>
						
					</div>		
		
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy2.jpg'  alt=''/>
							</a>	
						</div>		
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>		
						</div>		
					</div>		
				
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy3.jpg'  alt=''/>
							</a>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>	
				
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy4.jpg'  alt=''/>
							</a>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy5.jpg'  alt=''/>
							</a>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy6.jpg'  alt=''/>
							</a>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy7.jpg'  alt=''/>
							</a>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy8.jpg'  alt=''/>
							</a>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy9.jpg'  alt=''/>
							</a>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy10.jpg'  alt=''/>
							</a>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy11.jpg'  alt=''/>
							</a>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<a href='/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy12.jpg'  alt=''/>
							</a>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<p class={styles.thumbs__text__name}>꽃님이 / 여 / 7개월</p>
									<p class={styles.thumbs__text__date}>2023.07.09 12:20</p>
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>활짝 웃고있는 꽃님이</h1>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>

				</div>
			</section>


            <Floting_Btn/>

			<div class={styles.footer}>
				<div class={styles.footer__contents}>     
					<div class={styles.footer__item}>
						<a href='/'>
						<img class={styles.footer__contents__image} src='/images/home2.png'  alt=''/>  
						<p>홈</p>
						</a>
					</div>	
					<div class={styles.footer__item}>
						<a href='/'>   
						<img class={styles.footer__contents__image} src='/images/vlog2.png'  alt=''/>  
						<p>펫매니저</p>
						</a>
					</div>
					<div class={styles.footer__item}>  
						<a href='/'>
						<img class={styles.footer__contents__image} src='/images/parcel2.png'  alt=''/>
						<p>분양정보</p>
						</a>
					</div>	
					<div class={styles.footer__item}> 
						<a href='/'>
						<img class={styles.footer__contents__image} src='/images/position2.png'  alt=''/>
						<p>지역정보</p>
						</a>
					</div>
					<div class={styles.footer__item}>
						<a href='/'>
						<img class={styles.footer__contents__image} src='/images/user2.png'  alt=''/>   
						<p>사용자</p>
						</a>
					</div>		
				</div>	
			</div>		

		</>
	);
};


function Floting_Btn() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	}
	useEffect(()=>{
		window.addEventListener('scroll', updateScroll);
	});
	return (
		<div class={styles.floating__button}> 
			<span class={styles.move__board}> 
				<a href='/'>    
					<img src='/images/write.png'  alt=''/>  
				</a>	
			</span>
		</div> 
	)
};

export default Main;