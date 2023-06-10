import styled from "styled-components";
import InfoGridDate from "./info_grid_date";
import InfoGridTime from "./info_grid_time";
import { InfoGridEvent } from "./info_grid_event";
import { InfoGridContext, InfoGridLocation } from "./info_grid_cards";
import { useRef } from "react";

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

const ScrollableContainer = styled(Container)`
  width: 100%;
  grid-template-columns: repeat(3, 100%);
  align-items: start;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 2px;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  }
`;

export default function InfoGrid() {
  return (
    <Container>
      <InfoGridEvent EventType="Tanz"></InfoGridEvent>
      <ScrollableContainer>
        <div>
          <InfoGridDate Day="3" />
          <InfoGridTime begin="10:00" end="20:00" />
        </div>
        <InfoGridLocation />
        <InfoGridContext />
      </ScrollableContainer>
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
