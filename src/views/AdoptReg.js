import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/AdoptReg.module.css';
import '../css/User.css';
import React, {useState, useEffect} from 'react';

const AdoptReg = () => {
    
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
                </div>
            </div>

            <form>
                {/* 이미지 선택 */}
                <Link to='/adopt/reg'>
                    <div class={styles.picture}>
                        <img class={styles.camera} src='/images/camera-gray.png'/>                    
                    </div>    
                </Link>
                <div class={styles.picture__text}>
                    <span>사진선택  (0/10)</span>
                </div>  

                {/* 하단 Content 30% */}
                <div class={styles.main__contents}>
                    <div class={styles.main__content__wrap}>
                        <div class={styles.main__content}>
                            <table>
                                <tr height='120px'>
                                    <td><span>&#x2022;</span></td>
                                    <td>제목</td>
                                    <td><input type='text' id='title' name='title' placeholder='제목을 입력해 주세요'></input></td>
                                </tr>
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>종</td>
                                    <td><input type='text' id='type' name='type' placeholder=''></input></td>
                                </tr>
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>분양지역</td>
                                    <td><input type='text' id='area' name='area' placeholder=''></input></td>
                                </tr>                            
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>이름</td>
                                    <td><input type='text' id='name' name='name' placeholder=''></input></td>
                                </tr>
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>성별</td>
                                    <td><fieldseet>
                                        <label><input type="radio" name="gender" value="0"/><span>남</span></label>
                                        <label><input type="radio" name="gender" value="1"/><span>여</span></label>
                                        </fieldseet>
                                    </td>
                                    {/* <td><input type="radio" name="gender" value="0"/><label htmlFor='gender'>남</label>
                                        <input type="radio" name="gender" value="1"/><label htmlFor='gender'>여</label> </td> */}
                                </tr>
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>생년월일</td>
                                    <td><input type='text' id='birth_dt' name='birth_dt' placeholder='' ></input></td>
                                </tr>
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>접종내역</td>
                                    <td><textarea id='vaccine' name='vaccine' placeholder=''/></td>
                                </tr>
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>연락처</td>
                                    <td><input type='text' id='phone' name='phone' placeholder=''></input></td>
                                </tr>
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>동물판매업 허가번호</td>
                                    <td><input type='text' id='regno' name='regno' placeholder=''></input></td>
                                </tr> 
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>사진촬영일자</td>
                                    <td><input type='text' id='picture_dt' name='picture_dt' placeholder=''></input></td>
                                </tr>
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>분양가/책임비</td>
                                    <td><input type='text' id='price' name='price' placeholder=''></input></td>
                                </tr>
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>기타비용</td>
                                    <td><input type='text' id='addprice' name='addprice' placeholder=''></input></td>
                                </tr>
                                <tr>
                                    <td><span>&#x2022;</span></td>
                                    <td>기타</td>
                                    <td><textarea id='etc' name='etc' placeholder=''/></td>
                                </tr>
                            </table>    
                        </div>                    
                    </div>

                </div>

                <input class={styles.form__submit} type='button' value='작성하기' />
                
            </form>
           
        </>
    );
};


export default AdoptReg;