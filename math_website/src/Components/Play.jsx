import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ContextProvider from '../Context';

function Play() {
    const navigate = useNavigate();
    const [num1, setNum1] = React.useState();
    const [num2, setNum2] = React.useState();


    const temp = useContext(ContextProvider);
    const currentOperation = temp.currentOperation;

    const newAddNum = () => {
        const num1 = Math.floor(Math.random() * 100) + 1;
        const num2 = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = num1 + num2;
    }

    const submitClicked = () => {
        if(currentOperation === "Addition"){
            newAddNum();
        }
    }

    return (
        <div className="SelectBranch">
            <button onClick={() => submitClicked()}>submit</button>
        </div>
      );
}

export default Play;