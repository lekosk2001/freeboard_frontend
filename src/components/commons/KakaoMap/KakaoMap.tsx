import Head from 'next/head';
import React, { useEffect } from 'react'
import { key } from './appKey';

declare const window: typeof globalThis & {
    kakao: any;
};

const KakaoMap = () => {
    useEffect(() => {

        const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
        const options = { // 지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
            level: 3 // 지도의 레벨(확대, 축소 정도)
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
    }, [])

    return (
        <>
            <Head>
                <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}`}></script>
            </Head>
            <div id="map" style={{ width: "100%", height: "360px" }}></div>
        </>
    )
}

export default KakaoMap