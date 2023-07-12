import { Link } from 'react-router-dom';
import styles from '../css/Adopt.module.css';
import '../css/User.css';
import React, {useState, useEffect} from 'react';



const Adopt = () => {
	return (
		<>
			<div class={styles.header}>
				<div class={styles.header__wrapper}>
					<div class={styles.header__start}>         
						<Link to='/'>
							<img class={styles.header__icon} src='/images/search2.png' alt=''></img>  
						</Link>	
						<span class={styles.header__area}>인천시 &gt; 계양구</span>						
					</div>
					<div class={styles.header__end}> 
                        <Link to='/adopt'>
							<img class={styles.header__icon} src='/images/pin-red.png' alt=''></img>
						</Link>	
						<Link to='/catalog'>
							<img class={styles.header__icon} src='/images/menu.png' alt=''></img>
						</Link>	
						<div class={styles.header__notice__group}>
							<Link to='/notice'>							
								<img class={styles.header__icon__notice} src='/images/alarm2.png' alt=''></img>
							</Link>
							<div class={styles.header__notice__alarm}>
								<span>&#x2022;</span>
							</div>
						</div>
					</div>
				</div>	
			</div>

			<nav class={styles.nav}>
				<ul class={styles.nav__wrapper}> 
					<Link to='/'>     
						<li> 
							<img class={styles.nav__icon} src='/images/home2.png' alt=''/>   
							<span class={styles.nav__menu}>홈</span>
						</li>
					</Link>		
					<Link to='/'>     
						<li> 
							<img class={styles.nav__icon} src='/images/vlog2.png'  alt=''/>   
							<span class={styles.nav__menu}>펫매니저</span>
						</li>
					</Link>		
					<Link to='/adopt'>    
						<li> 
							<img class={styles.nav__icon} src='/images/parcel2.png'  alt=''/>
							<span class={styles.nav__menu}>분양정보</span>  
						</li>
					</Link>		
					<Link to='/'>        
						<li> 
							<img class={styles.nav__icon} src='/images/position2.png'  alt=''/>
							<span class={styles.nav__menu}>지역정보</span>
						</li>
					</Link>	
					<Link to='/'>    
						<li>
							<img class={styles.nav__icon} src='/images/user2.png'  alt=''/>    
							<span class={styles.nav__menu}>내정보</span>
						</li>
					</Link>		
				</ul>			
			</nav> 

			<section class={styles.thumbs}> 
				<div class={styles.thumbs__wrapper}> 
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy1.jpg'  alt=''/>
							</Link>
						</div>		
							
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>  
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이아빠</span>
									<span class='user__area'>박촌동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Amet eiusmod nulla eiusmod Lorem non ullamco consequat veniam et quis tempor dolor officia pariatur. Sint aliqua est ea ipsum sint commodo elit occaecat. Voluptate amet cupidatat elit tempor.</h1>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	

							<div class={styles.thumbs__frends}>  
                                <img class={styles.thumbs__heart__image} src='/images/pin-red.png'  alt=''/>                             
							</div>								
						</div>
						
					</div>		
		
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy2.jpg'  alt=''/>
							</Link>	
						</div>		
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이엄마</span>
									<span class='user__area'>가양동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
                                <img class={styles.thumbs__heart__image} src='/images/pin.png'  alt=''/>
							</div>		
						</div>		
					</div>		
				
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy3.jpg'  alt=''/>
							</Link>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이삼촌</span>
									<span class='user__area'>계산동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>2시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
                                <img class={styles.thumbs__heart__image} src='/images/pin-red.png'  alt=''/>	
                            </div>	
						</div>	
					</div>	
				
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy4.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이오빠</span>
									<span class='user__area'>귤현동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>30분전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
                                <img class={styles.thumbs__heart__image} src='/images/pin.png'  alt=''/>	
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy5.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이동생</span>
									<span class='user__area'>동양동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>1일전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
                                <img class={styles.thumbs__heart__image} src='/images/pin.png'  alt=''/>	
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy6.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이친구</span>
									<span class='user__area'>공항동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>15분전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
                                <img class={styles.thumbs__heart__image} src='/images/pin.png'  alt=''/>	
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy7.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이사촌</span>
									<span class='user__area'>서초동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>23시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
                                <img class={styles.thumbs__heart__image} src='/images/pin.png'  alt=''/>	
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy8.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이고모</span>
									<span class='user__area'>신천동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>45분전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
                                <img class={styles.thumbs__heart__image} src='/images/pin.png'  alt=''/>	
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy9.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이이모</span>
									<span class='user__area'>고강동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
                                <img class={styles.thumbs__heart__image} src='/images/pin.png'  alt=''/>	
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy10.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이아빠</span>
									<span class='user__area'>박촌동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
                                <img class={styles.thumbs__heart__image} src='/images/pin.png'  alt=''/>	
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy11.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이아빠</span>
									<span class='user__area'>박촌동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
                                <img class={styles.thumbs__heart__image} src='/images/pin.png'  alt=''/>	
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/adopt/detail'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy12.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이아빠</span>
									<span class='user__area'>박촌동</span> 									
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/pin.png'  alt=''/>								
							</div>	
						</div>	
					</div>

				</div>
			</section>


            <Floting_Btn/>

            {/* Footer */}
			<div class={styles.footer}>
				<div class={styles.footer__contents}>     
					<div class={styles.footer__item}>
						<Link to='/'>
						<img class={styles.footer__contents__image} src='/images/home2.png'  alt=''/>  
						<p>홈</p>
						</Link> 
					</div>	
					<div class={styles.footer__item}>
						<Link to='/'>   
						<img class={styles.footer__icon} src='/images/vlog2.png'  alt=''/>  
						<p>펫매니저</p>
						</Link> 
					</div>
					<div class={styles.footer__item}>  
						<Link to='/adopt'>
						<img class={styles.footer__icon} src='/images/parcel2.png'  alt=''/>
						<p>분양정보</p>
						</Link> 
					</div>	
					<div class={styles.footer__item}> 
						<Link to='/'>
						<img class={styles.footer__icon} src='/images/position2.png'  alt=''/>
						<p>지역정보</p>
						</Link> 
					</div>
					<div class={styles.footer__item}>
						<Link to='/'>
						<img class={styles.footer__icon} src='/images/user2.png'  alt=''/>   
						<p>사용자</p>
						</Link> 
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
            <Link to='/'> 
			    <span class={styles.move__board}>+분양하기</span>
            </Link> 
		</div> 
	);
};

export default Adopt;