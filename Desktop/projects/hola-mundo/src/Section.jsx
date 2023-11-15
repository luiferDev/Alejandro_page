/* eslint-disable react/prop-types */
import { SimpleGrid } from '@chakra-ui/react'
import { Stack, HStack, VStack, Box, Heading, Text, Image } from '@chakra-ui/react'


export function Section ({ title, subtitleOne, bodyOne, subtitleTwo, bodyTwo, subtitleThree, bodyThree , imagenOne, imagenTwo, ImagenThree}){
   return (
    <Stack direction ='column' alignItems='left' h='100vh'mt='3em' ml='12em'>
        <Heading alignItems='left' display='flex' justifyContent='left' my='1em'>{title}</Heading>
        <HStack>
            <SimpleGrid spacing = '16em' display='flex' justifyContent='space-between'>
            <Box>
            <VStack alignItems='left'>
                <Image 
                boxSize='150px'
                objectFit='fill'
                src = {imagenOne}
                alt='El gusty joven' />
                <Heading as='h3' mb='0.3em'>
                    {subtitleOne}
                </Heading>
                <Text>
                    {bodyOne}
                </Text>
            </VStack>
        </Box>
        <Box>
            <VStack alignItems='left'>
            <Image 
                boxSize='150px'
                objectFit='fill'
                src = {imagenTwo}
                alt='El gusty joven' />
                <Heading as='h3' mb='0.3em'>
                    {subtitleTwo}
                </Heading>
                <Text>
                    {bodyTwo}
                </Text>
            </VStack>
        </Box>
        <Box>
            <VStack alignItems='left'>
            <Image 
                boxSize='150px'
                objectFit='fill'
                src = {ImagenThree}
                alt='El gusty joven' />
                <Heading as='h3' mb='0.3em'>
                    {subtitleThree}
                </Heading>
                <Text>
                    {bodyThree}
                </Text>
            </VStack>
        </Box>
            </SimpleGrid>
        </HStack>

        
    </Stack>
    
  )
}
