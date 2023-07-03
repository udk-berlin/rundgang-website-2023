import styled from "styled-components";
import { useState } from "react";

import FooterLanding from './footer'
import HeaderLanding from './landing_header'
import LandingMenu from "@/components/pages/landing/landing_menu";
import LandingInfo from "@/components/pages/landing/info";

export default function LandingLayout () {
  const [infoIsActive, setInfoIsActive] = useState(false)

  return (
    <>
      <LandingInfo infoIsActive={infoIsActive} setInfoIsActive={setInfoIsActive} />

      <LandingContainer>
        <HeaderLanding />
        <LandingMenu setInfoIsActive={setInfoIsActive} />
        <FooterLanding />
      </LandingContainer>
    </>
  )
}

const LandingContainer = styled.div`
  display: grid;
  
  grid-template-rows: auto 1fr auto;
  
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;

  padding: 1rem;

  color: white;
  
  overflow: hidden;
`
