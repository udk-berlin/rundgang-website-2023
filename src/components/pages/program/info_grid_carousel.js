import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

export default function InfoGridCarousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(0);
  const carouselRef = useRef(null);

  const scrollToCurrentIndex = () => {
    if (carouselRef.current) {
      const { offsetWidth } = carouselRef.current;
      carouselRef.current.scrollTo({
        left: offsetWidth * currentIndex,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const currentSlide = carouselRef.current.children[currentIndex];
    setCarouselHeight(currentSlide.clientHeight);
    scrollToCurrentIndex();
  }, [currentIndex]);

  return (
    <>
      <div
        style={{
          height: carouselHeight,
          overflowX: "auto",
          overflowY: "hidden",
          width: "100%",
          transition: "all 0.3s",
        }}
      >
        <ScrollableDiv ref={carouselRef}>
          {children.map((child, index) => (
            <InfoCard key={index}>{child}</InfoCard>
          ))}
        </ScrollableDiv>
      </div>
      <button onClick={handlePrevious} disabled={currentIndex === 0}>
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentIndex === children.length - 1}
      >
        Next
      </button>
    </>
  );
}

const ScrollableDiv = styled.div`
  display: flex;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const InfoCard = styled.div`
  padding-bottom: 5px;
  flex: 0 0 100%;
  height: 100%;
`;
