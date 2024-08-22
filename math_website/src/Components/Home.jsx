import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Box, Button, Heading, Text, VStack, Container, useBreakpointValue } from '@chakra-ui/react';
import ContextProvider from '../Context';

function Home() {
    const navigate = useNavigate();
    const gettingStartedClicked = () => {
        navigate('/selectBranch');
    };

    const temp = useContext(ContextProvider);
    const setCorrect = temp.setCorrectList;
    const setIncorrect = temp.setIncorrectList;

    useEffect(() => {
        setCorrect([]);
        setIncorrect([]);
    });

    const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });

    return (
        <Box
            minH="100vh"
            bgGradient="linear(to-br, teal.400, blue.600)"
            color="white"
            textAlign="center"
            p={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Container maxW="container.md">
                <VStack spacing={4} mb={12}>
                    <Heading as="h1" size="2xl" fontWeight="bold">
                        The Brain Needs to Workout
                    </Heading>
                    <Heading as="h4" size="xl" fontWeight="bold">
                        To work at its best potential
                    </Heading>
                    <Button
                        size={buttonSize}
                        colorScheme="teal"
                        variant="solid"
                        onClick={gettingStartedClicked}
                        borderRadius="full"
                        px={10}
                        py={8}
                        boxShadow="lg"
                        _hover={{ bg: 'teal.600' }}
                    >
                        Start Working Out
                    </Button>
                    <Text fontSize="md" mt={4}>
                        Dive into the world of training your brain
                    </Text>
                </VStack>
            </Container>
        </Box>
    );
}

export default Home;
