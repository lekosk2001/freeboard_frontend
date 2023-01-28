import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const settings = {
    dots: true,
    appendDots: (dots: any) => <Dots>{dots}</Dots>,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrow: true,
  };

  // const Paging = styled.div`
  //   width: '8px';
  //   height: '8px';
  //   background-color: '#ddd';
  //   border-radius: '10px';
  //   padding: '10px';
  // `;

  const Dots = styled.ul`
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-bottom: 40px;
    height: 20px;
    button {
      border: 1px solid #fff;
      opacity: 100%;
    }
  `;

  const Carousel = styled.div`
    width: 100%;
    height: 400px;
    background-color: #364d79;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('image 01.png');
    flex-direction: column;
    gap: 33px;
  `;

  const CarouselTitle = styled.h1`
    font-size: 48px;
    color: #fff;
    text-align: center;
    line-height: 60px;
    word-break: keep-all;
  `;

  const CarouselDesc = styled.p`
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    width: 400px;
    text-align: center;
  `;

  return (
    <Slider {...settings}>
      <div>
        <Carousel>
          <CarouselTitle>CAROUSEL DESIGN</CarouselTitle>
          <CarouselDesc>
            캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데 같은
            공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고 각각은
            이미지와 약간의 텍스트로 구성되어있다고 합니다.
          </CarouselDesc>
        </Carousel>
      </div>
      <div>
        <Carousel>
          <CarouselTitle>CAROUSEL DESIGN</CarouselTitle>
          <CarouselDesc>
            캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데 같은
            공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고 각각은
            이미지와 약간의 텍스트로 구성되어있다고 합니다.
          </CarouselDesc>
        </Carousel>
      </div>
      <div>
        <Carousel>
          <CarouselTitle>CAROUSEL DESIGN</CarouselTitle>
          <CarouselDesc>
            캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데 같은
            공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고 각각은
            이미지와 약간의 텍스트로 구성되어있다고 합니다.
          </CarouselDesc>
        </Carousel>
      </div>
    </Slider>
  );
};

export default Banner;
