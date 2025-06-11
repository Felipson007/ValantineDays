import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselContainer = styled(Paper)`
  padding: 1rem;
  border-radius: 16px;
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SlideImage = styled('div')`
  height: 300px;
  margin: 0 10px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    cssEase: 'linear',
  };

  if (images.length === 0) {
    return (
      <CarouselContainer elevation={3}>
        <div style={{height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc'}}>
          Nenhuma imagem encontrada
        </div>
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer elevation={3}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <SlideImage key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SlideImage>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default ImageCarousel; 