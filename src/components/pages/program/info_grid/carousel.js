import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import InfoGridDate from "@/components/pages/program/info_grid/date";
import InfoGridTime from "@/components/pages/program/info_grid/time";
import {
  InfoGridContext,
  InfoGridLocation,
} from "@/components/pages/program/info_grid/cards";

export default function InfoGridCarousel({ project }) {
  let projectTimes = [];

  if ("temporal" in project) {
    project.temporal.forEach((date) => {
      projectTimes.push(
        <div>
          <InfoGridDate start={date.start} />
          <InfoGridTime start={date.start} end={date.end} />
        </div>
      );
    });
  }

  return (
    <Carousel>
      {projectTimes.map((projectTime) => projectTime)}
      <InfoGridLocation project={project} />
      <InfoGridContext project={project} />
    </Carousel>
  );
}

function Carousel({ children }) {
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
