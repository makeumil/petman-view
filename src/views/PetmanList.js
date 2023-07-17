import { Link } from 'react-router-dom';
import styles from '../css/PetmanList.module.css';
import '../css/User.css';
import React, {useState, useEffect} from 'react';



const PetmanList = () => {
	return (
		<>
			<div class={styles.header}>
				<div class={styles.header__wrapper}>
					<div class={styles.header__start}>         
						<Link to='/test'>
							<img class={styles.header__icon} src='/images/search2.png' alt=''></img>  
						</Link>	
						<span class={styles.header__area}>박촌동</span>						
					</div>
					<div class={styles.header__end}> 
						<Link to='/catalog'>
							<img class={styles.header__icon} src='/images/menu.png' alt=''></img>
						</Link>	
						<Link to='/notice'>		
						<div class={styles.header__notice__group}>												
							<img class={styles.header__icon__notice} src='/images/alarm2.png' alt=''></img>
							<div class={styles.header__notice__alarm}>
								<span>&#x2022;</span>
							</div>
						</div>
						</Link>
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
					<Link to='/petman/reg'>     
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
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy1.jpg'  alt=''/>
							</Link>
						</div>		
							
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Amet eiusmod nulla eiusmod Lorem non ullamco consequat ... </h1>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	

						</div>
						
					</div>		
		
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy2.jpg'  alt=''/>
							</Link>	
						</div>		
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
						</div>		
					</div>		
				
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy3.jpg'  alt=''/>
							</Link>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1>
								<p class={styles.thumbs__text__date}>2시간전</p>
							</div>	
						</div>	
					</div>	
				
					

				</div>
			</section>


            <Floting_Btn/>

			{/* <div class={styles.footer}>
				<div class={styles.footer__contents}>     
					<div class={styles.footer__item}>
						<Link to='/'>
						<img class={styles.footer__contents__image} src='/images/home2.png'  alt=''/>  
						<p>홈</p>
						</Link> 
					</div>	
					<div class={styles.footer__item}>
						<Link to='/petman/reg'>   
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
			</div>		 */}

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
				<Link to='/petman/reg'>    
					<img src='/images/write.png'  alt=''/>  
				</Link> 	
			</span>
		</div> 
	);
};

export default PetmanList;