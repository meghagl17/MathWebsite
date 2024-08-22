import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Box, Button, Heading, Text, VStack, Container, useBreakpointValue, Flex } from '@chakra-ui/react';
import ContextProvider from '../Context';

function Rules() {
    const navigate = useNavigate();
    const temp = useContext(ContextProvider);
    const setTimeLimit = temp.setTimeLimit;

    const timeChosen = (time) => {
        setTimeLimit(time);
        navigate('/play');
    }

    return (
        <Box
            minH="93vh"
            bgGradient="linear(to-br, teal.400, blue.600)"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            p={4}
        >
            <Container maxW={{ base: "90%", md: "container.md" }}>
                <VStack spacing={{ base: 6, md: 8 }} align="center">
                    <Heading
                        as="h1"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="bold"
                        letterSpacing="wide"
                        textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
                    >
                        Rules of the Game
                    </Heading>
                    <Text fontSize={{ base: 'sm', md: 'lg' }} maxW="md">
                        Welcome to an exhilarating math challenge! Test your skills by selecting a time limit and answering as many questions as you can within that period. Hit the submit button to record your answers, and click Exit whenever you’re ready to conclude the round. Stay sharp, embrace the challenge, and have a blast proving your math prowess!
                    </Text>
                    <Flex 
                        direction={{ base: 'column', md: 'row' }} // Stack buttons vertically on small screens
                        justify="center"
                        align="center"
                        spacing={{ base: 4, md: 6 }} // Adjust spacing for smaller screens
                        p={4}
                    >
                        <Button
                            colorScheme="teal" 
                            variant="solid" 
                            size={{ base: 'md', lg: 'lg' }} // Responsive button size
                            mr={3}
                            mb={{ base: 2, md: 0 }} // Add margin-bottom for vertical stacking on small screens
                            onClick={() => timeChosen(60)}
                        >
                            1 minute
                        </Button>
                        <Button
                            colorScheme="teal" 
                            variant="solid" 
                            size={{ base: 'md', lg: 'lg' }} 
                            mr={3}
                            mb={{ base: 2, md: 0 }} // Add margin-bottom for vertical stacking on small screens
                            onClick={() => timeChosen(180)}
                        >
                            3 minutes
                        </Button>
                        <Button
                            colorScheme="teal" 
                            variant="solid" 
                            size={{ base: 'md', lg: 'lg' }} 
                            mr={3}
                            onClick={() => timeChosen(300)}
                        >
                            5 minutes
                        </Button>
                    </Flex>
                </VStack>
            </Container>
        </Box>
    );
}

export default Rules;
