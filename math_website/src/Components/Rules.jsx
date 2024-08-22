import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Box, Button, Heading, Text, VStack, Container, useBreakpointValue, Flex } from '@chakra-ui/react';
import ContextProvider from '../Context';

function Rules() {
    const navigate = useNavigate();
    const startNowClicked = () => {
        navigate('/play');
    };

    const temp = useContext(ContextProvider);
    const timeLimit = temp.timeLimit;
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
            <Container maxW="container.md">
                <VStack spacing={8}>
                    <Heading
                        as="h1"
                        fontSize={{ base: '2xl', md: '4xl' }}
                        fontWeight="bold"
                        letterSpacing="wide"
                        textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
                    >
                        Rules of the Game
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} maxW="lg">
                        Welcome to an exhilarating math challenge! Test your skills by selecting a time limit and answering as many questions as you can within that period. Hit the submit button to record your answers, and click Exit whenever you’re ready to conclude the round. Stay sharp, embrace the challenge, and have a blast proving your math prowess!
                    </Text>
                    <Flex 
                        direction="row"
                        justify="center"
                        align="center"
                        spacing={10}
                        p={4}
                    >
                        <Button
                            colorScheme="teal" variant="solid" size="lg" mr={2}
                            onClick={() => timeChosen(60)}
                        >
                            1 minute
                        </Button>
                        <Button
                            colorScheme="teal" variant="solid" size="lg" mx={2}
                            onClick={() => timeChosen(180)}
                        >
                            3 minutes
                        </Button>
                        <Button
                            colorScheme="teal" variant="solid" size="lg" ml={2}
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
