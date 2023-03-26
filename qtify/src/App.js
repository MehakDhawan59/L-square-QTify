import React from 'react'
import HomePage from './components/Home/HomePage';
import { StyledEngineProvider } from '@mui/material/styles';
function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <HomePage />
      </StyledEngineProvider>
    </>
  )
}

export default App