import React from 'react'

import '@/styles/globals.css'
import '@/styles/maplibre-gl.css'

import ErrorBoundary from "@/error/boundry";

export default function App ({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}
