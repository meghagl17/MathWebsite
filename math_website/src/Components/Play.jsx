import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef } from 'react';
import ContextProvider from '../Context';
import { Box, Button, Heading, Input, Text, VStack, HStack, Container, useBreakpointValue, Divider, FormControl, FormLabel } from '@chakra-ui/react';

function Play() {
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [correctAnswer, setCorrectAnswer] = React.useState(0);
    const [userInput, setUserInput] = React.useState('');

    const [sign, setSign] = React.useState('');

    const temp = useContext(ContextProvider);
    const currentOperation = temp.currentOperation;
    const correct = temp.correctList;
    const setCorrect = temp.setCorrectList;
    const incorrect = temp.incorrectList;
    const setIncorrect = temp.setIncorrectList;
    const timeLimit = temp.timeLimit;
    const setTimeLimit = temp.setTimeLimit;

    const [timeLeft, setTimeLeft] = React.useState(timeLimit); // 60 seconds timer

    const generateNumbers = (max, min = 1, mult) => {
        let num1 = Math.floor(Math.random() * max) + min;
        let num2 = Math.floor(Math.random() * max) + min;
        if (mult) {
            num2 = Math.floor(Math.random() * 11) + 1;
        }
        if (num1 < num2) [num1, num2] = [num2, num1];
        return [num1, num2];
    };

    const generateQuestion = () => {
        let [newNum1, newNum2] = generateNumbers(100);
        let correctAnswerVar;
        switch (currentOperation) {
            case 'Addition':
                correctAnswerVar = newNum1 + newNum2;
                setSign('+');
                break;
            case 'Subtraction':
                correctAnswerVar = newNum1 - newNum2;
                setSign('-');
                break;
            case 'Multiplication':
                [newNum1, newNum2] = generateNumbers(100, 1, true);
                setSign('×');
                correctAnswerVar = newNum1 * newNum2;
                break;
            case 'Division':
                [newNum1, newNum2] = generateNumbers(100, 1, true);
                setSign('÷');
                correctAnswerVar = newNum1
                let holder = newNum1 * newNum2;
                newNum1 = holder
                break;
            default:
                correctAnswerVar = newNum1 + newNum2; // Default to addition
        }
        setNum1(newNum1);
        setNum2(newNum2);
        setCorrectAnswer(correctAnswerVar);
    };

    useEffect(() => {
        generateQuestion();
    }, [currentOperation]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
        if(timeLeft <= 0){
            exitClicked();
            setTimeLimit(0);
        }
    }, [timeLeft, navigate]);

    const checkAnswer = () => {
        if (parseInt(userInput, 10) === correctAnswer){
            return true;
        }else{
            return false;
        }
    }

    const exitClicked = () => {
        navigate('/result')
    };

    const submitClicked = () => {
        if (timeLeft > 0) {
            let result = checkAnswer();
            if(result === true){
                const newTuple = [num1, num2, userInput, correctAnswer];
                setCorrect((prevList) => [...prevList, newTuple]);
            } else {
                const newTuple = [num1, num2, userInput, correctAnswer];
                setIncorrect((prevList) => [...prevList, newTuple]);
            }
            setUserInput('');
            generateQuestion();
        }
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action (e.g., form submission if inside a form)
            submitClicked(); // Call the function when Enter is pressed
        }
    };

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
            <Container maxW="container.sm" p={6} borderRadius="md" bg="whiteAlpha.900" boxShadow="2xl">
                <VStack spacing={2} align="center">
                    <Heading as="h1" size="xl" mb={4} color="teal.700">
                        Solve the Problem
                    </Heading>
                    <Text fontSize="lg" fontWeight="bold" color="teal.700">
                        Time Left: {formatTime(timeLeft)}
                    </Text>
                    <Box
                        p={6}
                        bg="teal.500"
                        color="white"
                        borderRadius="md"
                        boxShadow="lg"
                        textAlign="center"
                    >
                        <Text fontSize="3xl" pl={5}>
                            {num1}
                        </Text>
                        <Text fontSize="3xl" mb={2}>
                            {sign} {num2}
                        </Text>
                        <Divider my={1} />
                        <FormControl id="input">
                            <Input
                                ref={inputRef}
                                type="number"
                                value={userInput}
                                onChange={handleInputChange}
                                placeholder="Enter your answer"
                                onKeyDown={handleKeyDown}
                                mt={4}
                                mb={4}
                                bg="white"
                                borderColor="teal.700"
                                _hover={{ borderColor: 'teal.400' }}
                                _focus={{ borderColor: 'teal.400' }}
                                color="black"
                                textAlign="center"
                            />
                        </FormControl>
                        <HStack spacing={4} justify="center">
                            <Button bg="red.700" _hover={{ bg: 'red.800', shadow: 'lg' }} color="white" size="lg" onClick={() => navigate('/result')}>Exit</Button>
                            <Button
                                colorScheme="teal"
                                size="lg"
                                onClick={submitClicked}
                                bg="teal.400"
                                color="white"
                                _hover={{ bg: 'teal.600', shadow: 'lg' }}
                                _active={{ bg: 'teal.700', shadow: 'md' }}
                                borderRadius="md"
                                boxShadow="md"
                            >
                                Submit
                            </Button>
                        </HStack>
                    </Box>
                </VStack>
            </Container>  
        </Box>
      );
}

export default Play;