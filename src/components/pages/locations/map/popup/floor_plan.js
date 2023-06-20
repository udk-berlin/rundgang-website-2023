import React, { useEffect, useState, useRef } from "react";
import { ReactSVG } from 'react-svg'
import { createRoot } from "react-dom/client";
import styled from "styled-components";

export default function FloorPlan({ floor, handleSelectRoom }) {
  // const [svgRoot, setSvgRoot] = useState();
  // const svgRef = useRef();
  //
  // useEffect(() => {
  //   if (svgRef?.current && !svgRoot) {
  //     setSvgRoot(svgRef?.current ? createRoot(svgRef?.current) : null);
  //   }
  // }, [svgRef]);
  //
  // useEffect(() => {
  //   if (src && svgRoot) {
  //     svgRoot.render(<ReactSVG src={src} />);
  //   } else if (svgRoot) {
  //     svgRoot.render();
  //   }
  // }, [src]);

  return (
    <ReactSVG src={floor.thumbnail_full_size} onClick={e => handleSelectRoom(e)} />
  );
};
