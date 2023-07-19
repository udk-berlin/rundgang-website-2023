import React from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";

import { useSlider, useSliderDispatch } from "@/providers/slider";

export default function FooterSlider({ numberOfSliderStates, disableSlider = false }) {
  const dispatch = useSliderDispatch();
  const state = useSlider();

  function handleChangeCommitted(event, value) {
    dispatch({
      type: 'update',
      position: value,
      origin: 'slider'
    })
  }

  return (
    <SliderContainer>
      {
        disableSlider ? <></> :
          <CustomSlider
            value={state.position}
            defaultValue={state.position}
            valueLabelDisplay="off"
            onChangeCommitted={handleChangeCommitted}
            marks
            min={0}
            max={numberOfSliderStates - 1}
          />
      }
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ theme }) => theme.footer.height};
  width: 100%;

  padding: 0 0.8rem;

  input {
    width: 100%;
  }
`;

const CustomSlider = styled(Slider)`
  height: ${({ theme }) => theme.footer.height};
  
  color: black;

  > .MuiSlider-rail {
    color: var(--color-pink-transparent) !important;
    opacity: 1 !important;
  }

  > .MuiSlider-thumb {
    box-shadow: none !important;
    color: var(--color-white) !important;
    outline: var(--info-border-width) solid var(--info-border-color) !important;
    width: 15px !important;
    height: 15px !important;
    
    border-radius: 10px !important;
  }

  > .MuiSlider-track {
    color: var(--color-black) !important;
  }
  
  > .MuiSlider-mark {
    color: var(--color-black)
  }
`;
