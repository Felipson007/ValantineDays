import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselWrapper = styled('div')`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  background: none;
  box-shadow: none;
`;

const SlideImage = styled('div')`
  height: 420px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(255, 64, 129, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 20px;
    box-shadow: 0 4px 24px rgba(255, 64, 129, 0.10);
  }
`;

const SUPPORTED_EXTS = ['jpg', 'jpeg', 'png', 'webp'];

const ImageCarousel = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    let isMounted = true;
    const foundImages: string[] = [];
    const maxImages = 20;

    for (let i = 1; i <= maxImages; i++) {
      let foundForThisIndex = false;
      for (const ext of SUPPORTED_EXTS) {
        const url = `/image${i}.${ext}`;
        const img = new window.Image();
        img.src = url;
        img.onload = () => {
          if (isMounted && !foundForThisIndex) {
            foundForThisIndex = true;
            foundImages.push(url);
            setImages([...foundImages]);
          }
        };
      }
    }
    return () => { isMounted = false; };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    arrows: false,
    fade: false,
    cssEase: 'cubic-bezier(0.23, 1, 0.32, 1)',
    beforeChange: (current: number, next: number) => {
      const imgs = document.querySelectorAll('.slick-slide img');
      imgs.forEach((img, idx) => {
        (img as HTMLElement).style.transform = idx === next + 1 ? 'scale(1.08)' : 'scale(1)';
        (img as HTMLElement).style.opacity = idx === next + 1 ? '1' : '0.85';
      });
    },
    afterChange: (current: number) => {
      const imgs = document.querySelectorAll('.slick-slide img');
      imgs.forEach((img, idx) => {
        (img as HTMLElement).style.transform = idx === current + 1 ? 'scale(1.08)' : 'scale(1)';
        (img as HTMLElement).style.opacity = idx === current + 1 ? '1' : '0.85';
      });
    },
  };

  if (images.length === 0) {
    return (
      <CarouselWrapper>
        <div style={{height: 420, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc'}}>
          Nenhuma imagem encontrada
        </div>
      </CarouselWrapper>
    );
  }

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {images.map((image, index) => (
          <SlideImage key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SlideImage>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default ImageCarousel; 