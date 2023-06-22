import styled from "styled-components";

import Slider from "@mui/material/Slider";
import { useSliderDispatch } from "@/providers/slider";

export default function FooterSlider() {
  const dispatch = useSliderDispatch();

  function handleChangeCommitted(event, value) {
    dispatch({
      type: 'update',
      position: value
    })
  }
  return (
    <SliderContainer>
      <CustomSlider
        defaultValue={0}
        valueLabelDisplay="off"
        onChangeCommitted={handleChangeCommitted}
        marks
        min={0}
        max={6}
      />
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 0.8rem;

  input {
    width: 100%;
  }
`;

const CustomSlider = styled(Slider)`
  color: black;

  & > .MuiSlider-rail {
    color: var(--color-pink) !important;
  }

  & > .MuiSlider-thumb {
    box-shadow: none !important;
    color: var(--color-white) !important;
    outline: var(--info-border-width) solid var(--info-border-color) !important;
    width: 15px !important;
    height: 15px !important;
  }
`;
