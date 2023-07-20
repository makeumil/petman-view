import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/Map.module.css';
import '../css/User.css';
import React, {useState, useEffect} from 'react';
import { Map, MapMarker  } from 'react-kakao-maps-sdk';


const Kakao = () => {

    const navigate = useNavigate();

    const { kakao } = window;
    const infowindow = new kakao.maps.InfoWindow({zIndex:1});
    const initInfo = {'content':'', 'address':'', 'phone':''};
    const [info, setInfo] = useState(initInfo)
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()
    
    const area = '계양구';
    const selectList = ["동물병원", "애견미용실", "애견카페"];
    const [selectValue, setSelectValue] = useState(selectList[0]);

    const handleSubmit = (e) => {
      setSelectValue(e.target.value);
      setInfo(initInfo);
      e.preventDefault();
    };

    var pin = '/images/marker-blue.png';
    if (selectValue==='동물병원') {
        pin = '/images/marker-red.png';
    }
    if (selectValue==='애견미용실') {
        pin = '/images/marker-pink.png';
    }
    if (selectValue==='애견카페') {
        pin = '/images/marker-blue.png';
    }


    useEffect(() => {
        if (!map) return
        const ps = new kakao.maps.services.Places();            
        const keyword = area + ' ' + selectValue;

        ps.keywordSearch(keyword, (data, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            const bounds = new kakao.maps.LatLngBounds();
            let markers = [];
    
            for (var i = 0; i < data.length; i++) {
              // @ts-ignore
              markers.push({
                position: {
                  lat: data[i].y,
                  lng: data[i].x,
                },
                content: data[i].place_name,
                address: data[i].address_name,
                phone: data[i].phone,
              });
              // @ts-ignore
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
            setMarkers(markers);
    
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          }
        });
      }, [map, selectValue]);
      
	return (
        <>

        {/* fix Header - 뒤로가기/홈, 공유 */}
        <div class={styles.header}>
            <div class={styles.header__wrapper}>
                <div class={styles.header__start}>
                    <img class={styles.header__img} src='/images/back.png' onClick={()=>{navigate(-1)}}></img>
                    <Link to='/'><img class={styles.header__img} src='/images/home2.png'></img></Link>
                    <div class={styles.header__area}>박촌동</div>
                </div>
                <div class={styles.header__end}>
                    <form>
                      <select class={styles.sel} onChange={handleSubmit}>
                        {selectList.map((item) => (
                            <option value={item} key={item}>
                            {item}
                            </option>
                        ))}
                      </select>
                    </form>
                </div>    
            </div>
        </div> 

        <div class={styles.map}>
          <Map 
              center={{
                  lat: 37.566826,
                  lng: 126.9786567,
              }}
              style={{
                  width: "100%",
                  height: "100%",
              }}
              level={3}
              onCreate={setMap}
              >
              {markers.map((marker) => (
                      <MapMarker
                      key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                      position={marker.position}
                      image={{
                        // src: "/images/marker-blue.png", 
                        src: pin,
                        size: {
                          width: 30,
                          height: 35,
                        }, 
                        options: {
                          offset: {
                            x: 27,
                            y: 69,
                          },
                        },
                      }}
                      onClick={() => setInfo(marker)}

                      >
                     {info &&info.content === marker.content && (
                 
                          // <div style={{color:"#000" }}>{marker.content}</div>
                          <div class={styles.infowindow}>{marker.content}</div>
                    
                          // <div class={styles.info}>                        
                          //   <img style={{ width: "30px", height: "30px"}} src='/images/footprint-red.png' />
                          //   {marker.content}<br />
                          //   {marker.address}<br />
                          //   {marker.phone}<br />
                          // </div>
                      )} 
                      </MapMarker>
                  ))}
          </Map>
        </div>

        <Footer info={ info }/>
          
          
          </>
	);
}    

function Footer(props) {
  const { info } = props;
  return (
    <>
      { info.content !== '' && 
             <div  class={styles.footer}>

                <div class={styles.footer__contents}>
                    <div>&#x2022; {info.content}</div>
                    <div>&#x2022; {info.address}</div>
                    <div>&#x2022; {info.phone}</div>          
                </div>
            
                 <Footer_Call val={info} />

            </div>
      }
    </>
  )
}

function Footer_Call(props) {
  const { val } = props;
  const phonenum = 'tel:' + val.phone;
 
  return (
    <>
    { val.phone !== '' && 
      <div class={styles.footer__call}>
        <a href={phonenum}>
          <img src='/images/call1.png' alt='전화걸기' title='전화걸기' />
        </a>   
      </div>
    }   
    </>
  )
}

export default Kakao;