import React, { forwardRef, useRef } from 'react'

export default forwardRef(function Popup ({ location }) {
  const containerRef = useRef(null)
  return (
        <div ref={containerRef}></div>
  )
})
