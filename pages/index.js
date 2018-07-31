import React from 'react'
import styled, { hydrate, keyframes, css, injectGlobal } from 'react-emotion'

import Gallery from '../components/Gallery'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    background: SNOW;
    min-height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 24px;
  }
`

export default () => {
  return <Gallery />
}
