import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/PetmanContent.module.css';
import React, {useState, useEffect} from 'react';

const Main = (props) => {
    
    const navigate = useNavigate();
 
	return (
		<>

            {/* fix Header - 뒤로가기/홈, 공유 */}
            <div class={styles.header}>
                <div class={styles.header__wrapper}>
                    <div class={styles.header__start}>
                        <img class={styles.header__back} src='/images/back.png' onClick={()=>{navigate(-1)}}></img>
                        <Link to='/'><img class={styles.header__home} src='/images/home2.png'></img></Link>
                    </div>
                    <div class={styles.header__end}>
                        <img class={styles.header__share} src='/images/share.png'></img>
                    </div>    
                </div>
            </div>

            {/* 상단 이미지 50% */}
            <div class={styles.main__image__info}>
                {/* 이미지 */}
                <div class={styles.main__image}>

                </div>

                {/* 이미지 아이콘 표시 - 좌우 드래그 시 해당 아이콘 색상 변경 */}
                <div class={styles.main__image__icon}>

                </div>
            </div>

            {/* 하단 Content 50% */}
            <div class={styles.main__contents}>
                {/* User정보 */}
                <div class={styles.user}>

                </div>

                {/* 글 내용 */}
                <div class={styles.content}>

                </div>

                {/* 댓글 리스트 desc sort */}
                <div class={styles.content_reaction}>

                </div>
            </div>
        
            {/* fix Footer */}
            <div class={styles.footer}>

            </div>
        </>
    );
};

export default Main;        