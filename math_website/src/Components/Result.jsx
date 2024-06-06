import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ContextProvider from '../Context';

function Result() {
    const navigate = useNavigate();

    const temp = useContext(ContextProvider);
    const correct = temp.correctList;
    const incorrect = temp.incorrectList;

    return (
        <div className="Result">
            <p>Correct: </p>
            <ul>
                {correct.map((tuple, index) => (
                <li key={index}>
                    Num1: {tuple[0]}, Num2: {tuple[1]}, User Answer: {tuple[2]}, Correct Answer: {tuple[3]}
                </li>
                ))}
            </ul>
            <p>Wrong: </p>
            <ul>
                {incorrect.map((tuple, index) => (
                <li key={index}>
                    Num1: {tuple[0]}, Num2: {tuple[1]}, User Answer: {tuple[2]}, Correct Answer: {tuple[3]}
                </li>
                ))}
            </ul>
        </div>
      );
}

export default Result;