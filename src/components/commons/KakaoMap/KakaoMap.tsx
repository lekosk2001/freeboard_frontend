import Head from 'next/head';
import React, { useEffect } from 'react'
import { appKey } from './appKey';

declare const window: typeof globalThis & {
    kakao: any;
};

interface Props {
    Lat: number
    Lng: number
}

const KakaoMap = (props: Props) => {

    const Lat = props.Lat
    const Lng = props.Lng

    useEffect(() => {

        if (Lat && Lng) {
            // 여기서 직접 다운로드 받고, 다 받을때까지 기다렸다가 그려주기!!

            const script = document.createElement("script"); // html에 script라는 태그(Element)를 만든다.

            script.src =
                `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`
            document.head.appendChild(script);

            script.onload = () => {
                window.kakao.maps.load(function () {
                    const container = document.getElementById("map");
                    const options = {
                        center: new window.kakao.maps.LatLng(Lat, Lng),
                        level: 3
                    };

                    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

                    // 마커가 표시될 위치입니다 
                    const markerPosition = new window.kakao.maps.LatLng(Lat, Lng);

                    // 마커를 생성합니다
                    const marker = new window.kakao.maps.Marker({
                        position: markerPosition
                    });

                    // 마커가 지도 위에 표시되도록 설정합니다
                    marker.setMap(map);

                    const mapTypeControl = new window.kakao.maps.MapTypeControl();

                    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
                    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
                    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

                    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
                    const zoomControl = new window.kakao.maps.ZoomControl();
                    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
                })
            }

        }
    }, [Lat, Lng])

    return (
        <>
            <Head>
                <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}`}></script>
            </Head>
            <div id="map" style={{ width: "100%", height: "360px" }}></div>
        </>
    )
}

export default KakaoMap