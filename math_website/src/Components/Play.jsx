import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ContextProvider from '../Context';

function Play() {
    const navigate = useNavigate();
    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [correctAnswer, setCorrectAnswer] = React.useState(0);


    const temp = useContext(ContextProvider);
    const currentOperation = temp.currentOperation;

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

    const submitClicked = () => {
        if(currentOperation === "Addition"){
            newAddNum();
        }
    }

    return (
        <div className="SelectBranch">
            <p>Num 1: {num1}</p>
            <p>Num 2: {num2}</p>
            <button onClick={() => submitClicked()}>submit</button>
        </div>
      );
}

export default Play;