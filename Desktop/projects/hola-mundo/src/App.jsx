import { Stack, Button, Box, Heading, Text, Image } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'


export function App(){
  return (
    <Stack spacing={10} direction='row' 
    display="flex" 
    alignItems="center" 
    justifyContent="space-between">
    
      <Stack pl='5em' maxWidth='700px'>
          <Heading as="h1" fontFamily='Lato' size='2xl'>
            Alejandro Farías: La Leyenda
          </Heading>
          <Text mt='0.5em' fontFamily='Lato Light'>
          Descubre la esencia del vallenato en cada nota con Alejandro Farías, un maestro con más de una década de pasión y talento en el escenario.
          </Text>
          <Button rightIcon= {<ArrowRightIcon />} as='a' target='_blank' variant='outline' href='https://chakra-ui.co./' 
          color="violet" size="lg" w='70%' mt='1em'   _hover={{
            background: "black",
            color: "white",
          }}>
              ¿Quieres saber más?
          </Button>

      </Stack>
      

    <Box>
      <Image src='./src/assets/cadenas.png' alt='Alejo Farías' h='100vh' w='40vw' />
    </Box>
    </Stack>
  )
}