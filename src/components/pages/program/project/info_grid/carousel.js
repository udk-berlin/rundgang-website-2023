import styled, { useTheme } from "styled-components";
import React, { useState, useEffect, useRef } from "react";

import ProjectInfoGridDate from "@/components/pages/program/project/info_grid/date/date";

import { useSlider } from "@/providers/slider";
import { useWindowSize } from "@/providers/window_size";
import ProjectInfoGridLocations from "@/components/pages/program/project/info_grid/locations";
import ProjectInfoGridStructures from "@/components/pages/program/project/info_grid/structures";

export default function ProjectInfoGridCarousel({ project, forProjectPage = false }) {
  return (
    <Carousel>
      <ProjectInfoGridDate project={project} />
      <ProjectInfoGridLocations project={project} forProjectPage={forProjectPage} />
      <ProjectInfoGridStructures project={project} forProjectPage={forProjectPage} />
    </Carousel>
  );
}

function Carousel({ children }) {
  const slider = useSlider();
  const theme = useTheme();
  const [carouselHeight, setCarouselHeight] = useState(0);
  const carouselRef = useRef(null);
  const windowSize = useWindowSize();

  const scrollToCurrentIndex = () => {
    if (carouselRef.current) {
      const { offsetWidth } = carouselRef.current;
      carouselRef.current.scrollTo({
        left: offsetWidth * (slider.position - theme.carousel.sliderOffset),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (slider.position >= theme.carousel.sliderOffset) {
      let child = slider.position - theme.carousel.sliderOffset;
      const currentSlide = carouselRef.current.children[child];
      setCarouselHeight(currentSlide.clientHeight);
      scrollToCurrentIndex();
    } else {
      setCarouselHeight("0px");
    }
  }, [slider.position, windowSize?.width]);

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

  padding-top: 0.3rem;

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
