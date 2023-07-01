import { useState, useEffect } from "react";

import MetaHeader from '@/components/pages/meta_header'
import LocalizationProvider from "@/components/localization/provider";
import { ThemeProvider } from "styled-components";
import {breakpoints, defaultTheme, mobileTheme} from "@/themes/theme";
import useWindowSize from "@/hooks/window_size";

export default function Page ({ children }) {
  const [responsiveTheme, setResponsiveTheme] = useState(defaultTheme)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize.width <= breakpoints.mobile) {
      setResponsiveTheme(mobileTheme)
    } else {
      setResponsiveTheme(defaultTheme)
    }
  }, [windowSize.width])

  return (
    <>
      <MetaHeader />
      <main>
        <ThemeProvider theme={responsiveTheme}>
          <LocalizationProvider>
            {children}
          </LocalizationProvider>
        </ThemeProvider>
      </main>
    </>
  )
}
