import styles from "@/styles/layout/Slider.module.css";
import styled from "styled-components";
import Slider from "@mui/material/Slider";

export default function SliderContainer({ updateState }) {
  function changeState(event, value) {
    updateState(value);
  }
  return (
    <div className={styles.container}>
      <CustomSlider
        defaultValue={0}
        valueLabelDisplay="off"
        onChangeCommitted={changeState}
        marks
        min={0}
        max={6}
      />
    </div>
  );
}

const CustomSlider = styled(Slider)`
  color: black;

  & > .MuiSlider-rail {
    color: #646464;
  }

  & > .MuiSlider-thumb {
    color: var(--color-white);
    outline: var(--info-border-width) solid var(--info-border-color);
    width: 15px;
    height: 15px;
  }
`;
