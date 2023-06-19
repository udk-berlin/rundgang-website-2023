import styled from "styled-components";
import React, { useState, useEffect, useRef, useContext } from "react";
import InfoGridDate from "@/components/pages/program/info_grid/date";
import {
  InfoGridContext,
  InfoGridLocation,
} from "@/components/pages/program/info_grid/cards";
import { SliderContext } from "@/components/contexts/slider_context";

export default function InfoGridCarousel({ project }) {
  return (
    <Carousel>
      <InfoGridDate project={project} />
      <InfoGridLocation project={project} />
      <InfoGridContext project={project} />
    </Carousel>
  );
}

function Carousel({ children }) {
  const slider = useContext(SliderContext);
  const [carouselHeight, setCarouselHeight] = useState(0);
  const carouselRef = useRef(null);

  const scrollToCurrentIndex = () => {
    if (carouselRef.current) {
      const { offsetWidth } = carouselRef.current;
      carouselRef.current.scrollTo({
        left: offsetWidth * slider,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const currentSlide = carouselRef.current.children[slider];
    setCarouselHeight(currentSlide.clientHeight);
    scrollToCurrentIndex();
  }, [slider]);

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
