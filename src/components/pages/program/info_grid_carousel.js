import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

const ScrollableDiv = styled.div`
  display: flex;
  overflow-x: hidden;
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

    console.log(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const onScroll = (event) => {
      event.preventDefault();
      console.log(event.deltaX);
      let thr = 0;
      if (event.deltaX > thr) {
        handleNext();
      } else if (event.deltaX < -thr) {
        handlePrevious();
      }
      carouselRef.current.removeEventListener("wheel", onScroll);
      setTimeout(() => {
        carouselRef.current.addEventListener("wheel", onScroll);
      }, 1000); // return event after 1 second
    };

    carouselRef.current.addEventListener("wheel", onScroll);
    return () =>
      carouselRef.current.removeEventListener("wheel", (e) => {
        onScroll(e);
      });
  }, []);

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
