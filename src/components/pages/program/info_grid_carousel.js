import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

const ScrollableDiv = styled.div`
  display: flex;
  overflow-x: auto;
  /* scroll-snap-type: x mandatory; */

  &::-webkit-scrollbar {
    display: none;
  }

  /* & > * {
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  } */
`;

const InfoCard = styled.div`
  padding-bottom: 5px;
  flex: 0 0 100%;
  height: 100%;
`;

export const InfoGridCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(0);
  const [scrollDir, setScrollDir] = useState("");
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
  console.log(currentIndex);

  useEffect(() => {
    if (scrollDir == "right") {
      handleNext();
    } else if (scrollDir == "left") {
      handlePrevious();
    }
    const carousel = carouselRef.current;
    const threshold = 50;
    let lastScrollX = carousel.scrollLeft;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollX = carousel.scrollLeft;

      if (Math.abs(scrollX - lastScrollX) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollX > lastScrollX ? "right" : "left");
      lastScrollX = scrollX > 0 ? scrollX : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    carousel.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => carousel.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

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
};
