import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { useLinkDispatch } from "@/providers/link";
import styled from "styled-components";


export default function LandingMenuM({ setInfoIsActive, infoIsActive }) {
  const language = useIntl();
  return (
    <MenuContainer>
      <SVGContainer>
        {language.locale === "en" ? (
          <EnSVG setInfoIsActive={setInfoIsActive} infoIsActive={infoIsActive} />
        ) : (
          <DeSVG setInfoIsActive={setInfoIsActive} infoIsActive={infoIsActive} />
        )}
      </SVGContainer>
    </MenuContainer>
  );
}

function DeSVG({ setInfoIsActive, infoIsActive }) {
  const [isInfoClicked, setIsInfoClicked] = useState(false);
  const [isProgramClicked, setIsProgramClicked] = useState(false);
  const [isLocationsClicked, setIsLocationsClicked] = useState(false);
  const [isTimelineClicked, setIsTimelineClicked] = useState(false);
  const dispatch = useLinkDispatch()

  const programRef = useRef(null);
  const infoRef = useRef(null);
  const locationsRef = useRef(null);
  const timelineRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (!infoIsActive && isInfoClicked) {
      setIsInfoClicked(false)
    }
  }, [infoIsActive])

  useEffect(() => {
    infoRef.current.addEventListener("click", () => {
      setIsInfoClicked(true)
      setInfoIsActive(true);
    });
    programRef.current.addEventListener("click", () => {
      setIsProgramClicked(true)
      dispatch({type: 'clicked'})
      router.push("/program");
    });
    locationsRef.current.addEventListener("click", () => {
      setIsLocationsClicked(true)
      dispatch({type: 'clicked'})
      router.push("/locations");
    });
    timelineRef.current.addEventListener("click", () => {
      setIsTimelineClicked(true)
      dispatch({type: 'clicked'})
      router.push("/timeline");
    });
  }, []);

  return (
    <StyledSVG
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="4272.4731"
      height="1680"
      viewBox="0 0 4272.4731 1680"
    >
      <g ref={programRef}>
        <StyledPath isClicked={isProgramClicked} d="M0,320V0H334.5c121,0,168.5,33,168.5,118,0,99.5-41,132-168.5,133H180v69H0ZM180,150.5h119.5v-43.5h-119.5v43.5Z" />
        <StyledPath isClicked={isProgramClicked} d="M896.4937,77.5V225h-177.5v95h-176V77.5h173l-3.5,77,63.5-77h120.5Z" />
        <StyledPath isClicked={isProgramClicked} d="M936.4868,201.5c0-89,70.5-128.5,230-128.5,158.5,0,229,39.5,229,128.5,0,89.5-69.5,128.5-229,128.5s-230-39.5-230-128.5Zm179,21.5h94v-42.5h-94v42.5Z" />
        <StyledPath isClicked={isProgramClicked} d="M1724.9849,77.5h173v200.5c0,90.5-32.5,121-128,121h-298.5v-106.5h250.5v-17.5h-136c-114.5,0-160.5-29.5-160.5-103.5,0-73,57-101.5,203-101.5,11,0,23.5,0,36,.5l63,64h1l-3.5-57Zm-101,123h98v-29.5h-98v29.5Z" />
        <StyledPath isClicked={isProgramClicked} d="M2316.4839,77.5V225h-177.5v95h-176V77.5h173l-3.5,77,63.5-77h120.5Z" />
        <StyledPath isClicked={isProgramClicked} d="M2640.4771,77.5c113,0,180,40.5,180,109v133.5h-174.5v-40.5l-66.5,40.5h-103.5c-92.5,0-109.5-19.5-109.5-124.5h279.5v-19h-278.5V77.5h273Zm-81.5,179l87-4v-24h-87v28Z" />
        <StyledPath isClicked={isProgramClicked} d="M3546.4751,196.5v123.5h-176v-110h-71.5v110h-176v-110h-71.5v110h-176V77.5h173l-3.5,77,64-84c21-2,40-3,56.5-3,82,0,117.5,20.5,129,84.5l62-81.5c21-2,40-3,56.5-3,98.5,0,133.5,30,133.5,129Z" />
        <StyledPath isClicked={isProgramClicked} d="M4272.4731,196.5v123.5h-176v-110h-71.5v110h-176v-110h-71.5v110h-176V77.5h173l-3.5,77,64-84c21-2,40-3,56.5-3,82,0,117.5,20.5,129,84.5l62-81.5c21-2,40-3,56.5-3,98.5,0,133.5,30,133.5,129Z" />
      </g>
      <g ref={locationsRef}>
        <StyledPath isClicked={isLocationsClicked} d="M0,610c0-112.5,89-167,273.5-167,183.5,0,272.5,54.5,272.5,167,0,114.5-88.5,170-272.5,170C89,780,0,724.5,0,610Zm197,28.5h151v-56.5H197v56.5Z" />
        <StyledPath isClicked={isLocationsClicked} d="M939.4946,527.5v147.5h-177.5005v95h-176v-242.5h173l-3.5,77,63.5005-77h120.5Z" />
        <StyledPath isClicked={isLocationsClicked} d="M1303.9868,626.5h-124.5v21.5l124.5,1v126.5c-24,2.5-139,3-141.5,3-126.5,0-159-20-159-111.5v-40.5h-29v-99h29v-52.5h176v52.5h124.5v99Z" />
        <StyledPath isClicked={isLocationsClicked} d="M1529.9829,770c-131.5,0-190-36.5-190-118.5,0-93,68-133,225-133,166,0,228,39.5,228,145h-273.5v18l269.5,1v87.5h-259Zm-10.5-134.5h88.5v-22.5h-88.5v22.5Z" />
      </g>
      <g ref={timelineRef}>
        <StyledPath isClicked={isTimelineClicked} d="M0,1220.0005v-107.5l180.5-105H10v-107.5H475v107.5l-188.5,105h188.5v107.5H0Z" />
        <StyledPath isClicked={isTimelineClicked} d="M694.9971,1220.0005c-131.5,0-190-36.5-190-118.5,0-93,68-133,225-133,165.9995,0,227.9995,39.5,227.9995,145h-273.4995v18l269.4995,1v87.5h-258.9995Zm-10.5-134.5h88.5v-22.5h-88.5v22.5Z" />
        <StyledPath isClicked={isTimelineClicked} d="M1009.9897,957.5005v-57.5h176.5v57.5h-176.5Zm.5,262.5v-242h176v242h-176Z" />
        <StyledPath isClicked={isTimelineClicked} d="M1565.9849,1076.5005h-124.5v21.5l124.5,1v126.5c-24,2.5-139,3-141.5,3-126.5,0-159-20-159-111.5v-40.5h-29v-99h29v-52.5h176v52.5h124.5v99Z" />
        <StyledPath isClicked={isTimelineClicked} d="M1791.981,1220.0005c-131.5,0-190-36.5-190-118.5,0-93,68-133,225-133,166,0,228,39.5,228,145h-273.5v18l269.5,1v87.5h-259Zm-10.5-134.5h88.5v-22.5h-88.5v22.5Z" />
        <StyledPath isClicked={isTimelineClicked} d="M2540.4741,1096.5005v123.5h-176v-110h-86.5v110h-176v-242.5h173l-3.5,77,64-84c23-2,43.5-3,61.5-3,107,0,143.5,29.5,143.5,129Z" />
      </g>
      <g ref={infoRef}>
        <StyledPath isClicked={isInfoClicked} d="M0,1670v-320H181v320H0Z" />
        <StyledPath isClicked={isInfoClicked} d="M689.4941,1546.5v123.5h-176v-110h-86.5v110H250.9941v-242.5h173l-3.5,77,64-84c23-2,43.5-3,61.5-3,107,0,143.5,29.5,143.5,129Z" />
        <StyledPath isClicked={isInfoClicked} d="M1037.4937,1416l-104,1v10.5h104v99h-104v144.5h-176v-144.5h-33v-99h33.5c3.5-61.5,38-84,140-84,44.5,0,72.5,1,139.5,6v66.5Z" />
        <StyledPath isClicked={isInfoClicked} d="M1057.481,1551.5c0-89,70.5-128.5,230-128.5,158.5,0,229,39.5,229,128.5,0,89.5-69.5,128.5-229,128.5s-230-39.5-230-128.5Zm179,21.5h94v-42.5h-94v42.5Z" />
      </g>
    </StyledSVG>
  );
}

function EnSVG({ setInfoIsActive, infoIsActive }) {
  const [isInfoClicked, setIsInfoClicked] = useState(false);
  const [isProgramClicked, setIsProgramClicked] = useState(false);
  const [isLocationsClicked, setIsLocationsClicked] = useState(false);
  const [isTimelineClicked, setIsTimelineClicked] = useState(false);
  const dispatch = useLinkDispatch()

  const programRef = useRef(null);
  const infoRef = useRef(null);
  const locationsRef = useRef(null);
  const timelineRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (!infoIsActive && isInfoClicked) {
      setIsInfoClicked(false)
    }
  }, [infoIsActive])

  useEffect(() => {
    infoRef.current.addEventListener("click", () => {
      setIsInfoClicked(true)
      setInfoIsActive(true);
    });
    programRef.current.addEventListener("click", () => {
      setIsProgramClicked(true)
      dispatch({type: 'clicked'})
      router.push("/program");
    });
    locationsRef.current.addEventListener("click", () => {
      setIsLocationsClicked(true)
      dispatch({type: 'clicked'})
      router.push("/locations");
    });
    timelineRef.current.addEventListener("click", () => {
      setIsTimelineClicked(true)
      dispatch({type: 'clicked'})
      router.push("/timeline");
    });
  }, []);

  return (
    <StyledSVG
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="3943.978"
      height="1680"
      viewBox="0 0 3943.978 1680"
    >
      <g ref={programRef}>
        <StyledPath isClicked={isProgramClicked} d="M0,320V0H334.5c121,0,168.5,33,168.5,118,0,99.5-41,132-168.5,133H180v69H0ZM180,150.5h119.5v-43.5h-119.5v43.5Z" />
        <StyledPath isClicked={isProgramClicked} d="M896.4937,77.5V225h-177.5v95h-176V77.5h173l-3.5,77,63.5-77h120.5Z" />
        <StyledPath isClicked={isProgramClicked} d="M936.4868,201.5c0-89,70.5-128.5,230-128.5,158.5,0,229,39.5,229,128.5,0,89.5-69.5,128.5-229,128.5s-230-39.5-230-128.5Zm179,21.5h94v-42.5h-94v42.5Z" />
        <StyledPath isClicked={isProgramClicked} d="M1724.9854,77.5h173v200.5c0,90.5-32.5,121-128,121h-298.5v-106.5h250.5v-17.5h-136c-114.5,0-160.5-29.5-160.5-103.5,0-73,57-101.5,203-101.5,11,0,23.5,0,36,.5l63,64h1l-3.5-57Zm-101,123h98v-29.5h-98v29.5Z" />
        <StyledPath isClicked={isProgramClicked} d="M2316.4839,77.5V225h-177.4995v95h-176V77.5h173l-3.5,77,63.5-77h120.4995Z" />
        <StyledPath isClicked={isProgramClicked} d="M2640.4771,77.5c113,0,180,40.5,180,109v133.5h-174.5v-40.5l-66.5,40.5h-103.5c-92.5,0-109.5-19.5-109.5-124.5h279.5v-19h-278.5V77.5h273Zm-81.5,179l87-4v-24h-87v28Z" />
        <StyledPath isClicked={isProgramClicked} d="M3546.4751,196.5v123.5h-176v-110h-71.5v110h-176v-110h-71.5v110h-176V77.5h173l-3.5,77,64-84c21-2,40-3,56.5-3,82,0,117.5,20.5,129,84.5l62-81.5c21-2,40-3,56.5-3,98.5,0,133.5,30,133.5,129Z" />
      </g>
      <g ref={locationsRef}>
        <StyledPath isClicked={isLocationsClicked} d="M0,770V450H180v189.5l202.5-1.5v132H0Z" />
        <StyledPath isClicked={isLocationsClicked} d="M413.9956,651.5c0-89,70.5-128.5,230-128.5,158.5,0,229,39.5,229,128.5,0,89.5-69.5,128.5-229,128.5s-230-39.5-230-128.5Zm179,21.5h94v-42.5h-94v42.5Z" />
        <StyledPath isClicked={isLocationsClicked} d="M1087.4941,770c-113,0-184.5-36-184.5-122,0-85.5,70.5-120.5,184.5-120.5h258.5v111h-259v24l259,1v106.5h-258.5Z" />
        <StyledPath isClicked={isLocationsClicked} d="M1671.9873,527.5c113,0,180,40.5,180,109v133.5h-174.5v-40.5l-66.5,40.5h-103.5c-92.5,0-109.5-19.5-109.5-124.5h279.5v-19h-278.5v-99h273Zm-81.5,179l87-4v-24h-87v28Z" />
        <StyledPath isClicked={isLocationsClicked} d="M2216.4854,626.5h-124.5v21.5l124.5,1v126.5c-24,2.5-139,3-141.5,3-126.5,0-159-20-159-111.5v-40.5h-29v-99h29v-52.5h176v52.5h124.5v99Z" />
        <StyledPath isClicked={isLocationsClicked} d="M2272.4819,507.5v-57.5h176.5v57.5h-176.5Zm.5,262.5v-242h176v242h-176Z" />
        <StyledPath isClicked={isLocationsClicked} d="M2498.98,651.5c0-89,70.5-128.5,230-128.5,158.5,0,229,39.5,229,128.5,0,89.5-69.5,128.5-229,128.5s-230-39.5-230-128.5Zm179,21.5h94v-42.5h-94v42.5Z" />
        <StyledPath isClicked={isLocationsClicked} d="M3441.478,646.5v123.5h-176v-110h-86.5v110h-176v-242.5h173l-3.5,77,64-84c23-2,43.5-3,61.5-3,107,0,143.5,29.5,143.5,129Z" />
        <StyledPath isClicked={isLocationsClicked} d="M3491.478,770v-95l248,4v-18.5h-68c-130,0-193-19.5-193-60,0-49,68-73,206-73h244.5v88.5h-234.5v14h95.5c105.5,0,154,23,154,72.5,0,46.5-48.5,67.5-155.5,67.5h-297Z" />
      </g>
      <g ref={timelineRef}>
        <StyledPath isClicked={isTimelineClicked} d="M157,1220v-188H0v-132H493.5v132h-157v188H157Z" />
        <StyledPath isClicked={isTimelineClicked} d="M538.4966,957.5v-57.5h176.5v57.5h-176.5Zm.5,262.5v-242h176v242h-176Z" />
        <StyledPath isClicked={isTimelineClicked} d="M1450.9946,1096.5v123.5h-176v-110h-71.5v110h-176v-110h-71.5v110h-176v-242.5h173l-3.5,77,64-84c21-2,40-3,56.5-3,82,0,117.5,20.5,129,84.5l62-81.5c21-2,40-3,56.5-3,98.5,0,133.5,30,133.5,129Z" />
        <StyledPath isClicked={isTimelineClicked} d="M1680.9927,1220c-131.5,0-190-36.5-190-118.5,0-93,68-133,225-133,166,0,228,39.5,228,145h-273.5v18l269.5,1v87.5h-259Zm-10.5-134.5h88.5v-22.5h-88.5v22.5Z" />
        <StyledPath isClicked={isTimelineClicked} d="M1995.9858,1220v-320h176v320h-176Z" />
        <StyledPath isClicked={isTimelineClicked} d="M2241.9805,957.5v-57.5h176.4995v57.5h-176.4995Zm.5,262.5v-242h175.9995v242h-175.9995Z" />
        <StyledPath isClicked={isTimelineClicked} d="M2921.979,1096.5v123.5h-176v-110h-86.5v110h-176v-242.5h173l-3.5,77,64-84c23-2,43.5-3,61.5-3,107,0,143.5,29.5,143.5,129Z" />
        <StyledPath isClicked={isTimelineClicked} d="M3151.979,1220c-131.5,0-190-36.5-190-118.5,0-93,68-133,225-133,166,0,228,39.5,228,145h-273.5v18l269.5,1v87.5h-259Zm-10.5-134.5h88.5v-22.5h-88.5v22.5Z" />
      </g>
      <g ref={infoRef}>
        <StyledPath isClicked={isInfoClicked} d="M0,1670v-320H181v320H0Z" />
        <StyledPath isClicked={isInfoClicked} d="M689.4941,1546.5v123.5h-176v-110h-86.5v110H250.9941v-242.5h173l-3.5,77,64-84c23-2,43.5-3,61.5-3,107,0,143.5,29.5,143.5,129Z" />
        <StyledPath isClicked={isInfoClicked} d="M1037.4937,1416l-104,1v10.5h104v99h-104v144.5h-176v-144.5h-33v-99h33.5c3.5-61.5,38-84,140-84,44.5,0,72.5,1,139.5,6v66.5Z" />
        <StyledPath isClicked={isInfoClicked} d="M1057.4814,1551.5c0-89,70.5-128.5,230-128.5,158.5,0,229,39.5,229,128.5,0,89.5-69.5,128.5-229,128.5s-230-39.5-230-128.5Zm179,21.5h94v-42.5h-94v42.5Z" />
      </g>
    </StyledSVG>
  );
}

const StyledRect = styled.rect`
  fill: none;

  pointer-events: all;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  
  display: flex;
  align-items: center;

  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
`;

export const SVGContainer = styled.div`
  height: 33vw;
  min-height: 33vw;
  max-height: 33vw;
  
  padding-left: 1rem;
`;

export const StyledSVG = styled.svg`
  width: 100%;
  min-width: 100%;
  max-width: 100%;

  height: 33vw;
  min-height: 33vw;
  max-height: 33vw;
  
  g {
    pointer-events: all;
  }
`;

export const StyledPath = styled.path`
  fill: ${({ isHovered, isClicked }) => (isHovered || isClicked ? "#fff" : "none")};
  stroke: #fff;
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
`;
