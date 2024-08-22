import * as React from 'react';
import { useContext } from 'react';
import { Box, Heading, Text, VStack, Divider, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, useBreakpointValue } from '@chakra-ui/react';
import ContextProvider from '../Context';
import { useNavigate } from 'react-router-dom';

function Result() {
    const temp = useContext(ContextProvider);
    const correct = temp.correctList;
    const incorrect = temp.incorrectList;

    const totalCorrect = correct.length;
    const totalIncorrect = incorrect.length;

    const navigate = useNavigate();

    return (
        <Box
            minH="100vh"
            bgGradient="linear(to-br, teal.400, blue.600)"
            p={6}
            color="white"
        >
            <VStack spacing={8} align="stretch">
                <Heading as="h1" size="xl" textAlign="center" mb={4}>
                    Results
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                    <Box>
                        <Heading size="lg" mb={4} color="green.700">
                            Correct Answers: {totalCorrect}
                        </Heading>
                        <VStack spacing={4} align="stretch">
                            {correct.map((tuple, index) => (
                                <Card key={index} bg="green.700" color="white" p={2} borderRadius="md" boxShadow="md">
                                    <CardHeader p={1}>  {/* Reduce space below the header */}
                                    <Text fontWeight="bold" fontSize="xl">
                                        Question {index + 1}
                                    </Text>
                                    </CardHeader>
                                    <CardBody>
                                    <Text><strong>Number 1:</strong> {tuple[0]}</Text>
                                    <Text><strong>Number 2:</strong> {tuple[1]}</Text>
                                    <Text><strong>Your Answer:</strong> {tuple[2]}</Text>
                                    <Text><strong>Correct Answer:</strong> {tuple[3]}</Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </VStack>
                    </Box>

                    <Box>
                        <Heading size="lg" mb={4} color="red.700">
                            Incorrect Answers: {totalIncorrect}
                        </Heading>
                        <VStack spacing={4} align="stretch">
                            {incorrect.map((tuple, index) => (
                                <Card key={index} bg="red.700" color="white" p={2} borderRadius="md" boxShadow="md">
                                    <CardHeader p={1}>  {/* Reduce space below the header */}
                                    <Text fontWeight="bold" fontSize="xl">
                                        Question {index + 1}
                                    </Text>
                                    </CardHeader>
                                    <CardBody>
                                    <Text><strong>Number 1:</strong> {tuple[0]}</Text>
                                    <Text><strong>Number 2:</strong> {tuple[1]}</Text>
                                    <Text><strong>Your Answer:</strong> {tuple[2]}</Text>
                                    <Text><strong>Correct Answer:</strong> {tuple[3]}</Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </VStack>
                    </Box>
                </SimpleGrid>
            </VStack>
        </Box>
    );
}

export default Result;
