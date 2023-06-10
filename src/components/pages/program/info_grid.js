import styled from "styled-components";
import InfoGridDate from "./info_grid_date";
import InfoGridTime from "./info_grid_time";
import { InfoGridEvent } from "./info_grid_event";
import { InfoGridContext, InfoGridLocation } from "./info_grid_cards";
import { useRef } from "react";
import CarouselOld from "@/components/carousel_old";
import { InfoGridCarousel } from "./info_grid_carousel";

const Container = styled.div`
  display: grid;
  justify-items: start;
  row-gap: 0.75rem;
  font-size: 0.7rem;
  font-weight: 500;

  & a {
    pointer-events: auto;
    display: block;
  }

  a:hover {
    color: #fff;
  }
`;

export default function InfoGrid() {
  return (
    <Container>
      <InfoGridEvent EventType="Tanz"></InfoGridEvent>
      <InfoGridCarousel>
        <div>
          <InfoGridDate Day="3" />
          <InfoGridTime begin="10:00" end="20:00" />
        </div>
        <InfoGridLocation />
        <InfoGridContext />
      </InfoGridCarousel>
    </Container>
  );
}

// const ScrollDemo = () => {
//   const myRef = useRef(null)

//   const executeScroll = () => myRef.current.scrollIntoView()
//   // run this function from an event handler or an effect to execute scroll

//   return (
//      <>
//         <div ref={myRef}>Element to scroll to</div>
//         <button onClick={executeScroll}> Click to scroll </button>
//      </>
//   )
// }
