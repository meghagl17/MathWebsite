import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import ContextProvider from '../Context';

function Play() {
    const navigate = useNavigate();

    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [correctAnswer, setCorrectAnswer] = React.useState(0);
    const [userInput, setUserInput] = React.useState('');

    const temp = useContext(ContextProvider);
    const currentOperation = temp.currentOperation;
    const correct = temp.correctList;
    const setCorrect = temp.setCorrectList;
    const incorrect = temp.incorrectList;
    const setIncorrect = temp.setIncorrectList;

    const [timeLeft, setTimeLeft] = React.useState(30); // 60 seconds timer

    const newAddNum = () => {
        let newNum1 = Math.floor(Math.random() * 100) + 1;
        let newNum2 = Math.floor(Math.random() * 100) + 1;
        if(newNum1 < newNum2){
            [newNum1, newNum2] = [newNum2, newNum1];
        }
        setNum1(newNum1);
        setNum2(newNum2);
        const correctAnswerVar = newNum1 + newNum2;
        setCorrectAnswer(correctAnswerVar);
    }

    const newSubNum = () => {
        let newNum1 = Math.floor(Math.random() * 100) + 1;
        let newNum2 = Math.floor(Math.random() * 100) + 1;
        if(newNum1 < newNum2){
            [newNum1, newNum2] = [newNum2, newNum1];
        }
        setNum1(newNum1);
        setNum2(newNum2);
        const correctAnswerVar = newNum1 - newNum2;
        setCorrectAnswer(correctAnswerVar);
    }

    const exitClicked = () => {
        navigate('/result')
    };


    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
        if(timeLeft <= 0){
            exitClicked();
        }
    }, [timeLeft]);

    const newMultNum = () => {
        let newNum1 = Math.floor(Math.random() * 100) + 1;
        let newNum2 = Math.floor(Math.random() * 11) + 1;
        if(newNum1 < newNum2){
            [newNum1, newNum2] = [newNum2, newNum1];
        }
        setNum1(newNum1);
        setNum2(newNum2);
        const correctAnswerVar = newNum1 * newNum2;
        setCorrectAnswer(correctAnswerVar);
    }

    const [operationFunction, setOperationFunction] = React.useState(() => newAddNum);

    useEffect(() => {
        if(currentOperation === 'Addition'){
            setOperationFunction(() => newAddNum);
        }else if (currentOperation === 'Subtraction'){
            setOperationFunction(() => newSubNum);
        }else if (currentOperation === 'Multiplication'){
            setOperationFunction(() => newMultNum);
        }
    }, [currentOperation]);

    const checkAnswer = () => {
        if (parseInt(userInput, 10) === correctAnswer){
            return true;
        }else{
            return false;
        }
    }

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
            operationFunction();
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

    return (
        <div className="SelectBranch">
            <p>Time Left: {formatTime(timeLeft)}</p>
            <p>Num 1: {num1}</p>
            <p>Num 2: {num2}</p>
            <input
                type="number"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Enter your answer"
            />
            <p>answer: {userInput}</p>
            <p>correct answer: {correctAnswer}</p>
            <button onClick={() => submitClicked()}>submit</button>
            <button onClick={() => exitClicked()}>Exit</button>
        </div>
      );
}

export default Play;