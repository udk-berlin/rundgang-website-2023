import styled, { useTheme } from "styled-components";
import { useState } from "react";

import FooterLanding from './footer'
import HeaderLanding from './header'
import LandingInfo from "@/components/pages/landing/info";
import LandingMenuL from "@/components/pages/landing/menu/l";
import LandingMenuM from "@/components/pages/landing/menu/m";

export default function LandingContent () {
  const theme = useTheme()
  const [infoIsActive, setInfoIsActive] = useState(false)

  return (
    <>
      <LandingInfo infoIsActive={infoIsActive} setInfoIsActive={setInfoIsActive} />
      <LandingContainer>
        <HeaderLanding />
        {
          theme.id === 'l' ?
            <LandingMenuL setInfoIsActive={setInfoIsActive} /> :
            <LandingMenuM setInfoIsActive={setInfoIsActive} infoIsActive={infoIsActive} />
        }
        <FooterLanding />
      </LandingContainer>
    </>
  )
}

const LandingContainer = styled.div`
  position: fixed;
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
