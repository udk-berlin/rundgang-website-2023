import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import InfoGridDate from "@/components/pages/program/info_grid/date";
import {
  InfoGridContext,
  InfoGridLocation,
} from "@/components/pages/program/info_grid/cards";
import { useSlider } from "@/providers/slider"

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
  const slider = useSlider();
  const [carouselHeight, setCarouselHeight] = useState(0);
  const carouselRef = useRef(null);

  const scrollToCurrentIndex = () => {
    if (carouselRef.current) {
      const { offsetWidth } = carouselRef.current;
      carouselRef.current.scrollTo({
        left: offsetWidth * (slider.position - 4),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (slider.position >= 4) {
      let child = slider.position - 4;
      const currentSlide = carouselRef.current.children[child];
      setCarouselHeight(currentSlide.clientHeight);
      scrollToCurrentIndex();
    } else {
      setCarouselHeight("0px");
    }
  }, [slider.position]);

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

  & > :nth-last-child(1) {
    /* background-color: red; */
    margin-right: var(--info-border-width);
  }
`;

const InfoCard = styled.div`
  padding-bottom: 0.5rem;
  flex: 0 0 100%;
  height: 100%;
`;
