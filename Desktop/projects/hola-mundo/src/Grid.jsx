/* eslint-disable react/prop-types */
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'


export function Grids({ title, subtitleOne, subtitleTwo, subtitleThree, subtitleFour, bodyOne, bodyTwo, bodyThree, bodyFour }){
    return (
        <Box position='relative'>
            <Heading ml='7em'>{title}</Heading>
            <SimpleGrid templateColumns='repeat(2, 2fr)' gap={8} mx='15em'my='1.5em'>
            <Box w='100%' h='250' bg='rgba(225, 73, 209, 0.1)'>
                <Heading as='h4' fontSize='3xl' color='white'p='0.5em'>{subtitleOne}</Heading>
                <Text pl='1em'>
                    {bodyOne}
                </Text>
            </Box>
            <Box w='100%' h='250' bg='rgba(225, 73, 209, 0.1)'>
                <Heading as='h4' fontSize='3xl' color='white'p='0.5em'>{subtitleTwo}</Heading>
                <Text pl='1em'>
                    {bodyTwo}
                </Text>
            </Box>
            <Box w='100%' h='250' bg='rgba(225, 73, 209, 0.1)'>
                <Heading as='h4' fontSize='3xl' color='white'p='0.5em'>{subtitleThree}</Heading>
                <Text pl='1em'>
                    {bodyThree}
                </Text>
            </Box>
            <Box w='100%' h='250' bg='rgba(225, 73, 209, 0.1)'>
                <Heading as='h4' fontSize='3xl' color='white'p='0.5em'>{subtitleFour}</Heading>
                <Text pl='1em'>
                    {bodyFour}
                </Text>
            </Box>
            </SimpleGrid>
        </Box>
    )
}