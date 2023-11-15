import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import theme from './theme.js'
import{ Section } from './Section.jsx'
import { Grids } from './Grid.jsx'


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <Section title='Mi carrera Artistica' subtitleOne='inicio' 
      subtitleTwo='desarrollo' subtitleThree='Actualidad' bodyOne='soy el gusty' 
      bodyTwo='soy el gusty' bodyThree='soy el gusty'
      imagenOne='./src/assets/react.svg' imagenTwo='./src/assets/react.svg' ImagenThree='./src/assets/react.svg'/>
      <Grids title='Mis Exitos' subtitleOne='Todo de Cabeza' subtitleTwo='La pelusa' subtitleThree='Mi guitarra' subtitleFour='7 palabras'
      bodyOne='Kaleth Morales' bodyTwo='Kaleth Morales' bodyThree={'Kaleth Morales'} bodyFour={'Kaleth Morales'}  />
    </ChakraProvider>
  </React.StrictMode>,
)