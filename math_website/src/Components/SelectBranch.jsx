import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ContextProvider from '../Context';
import '../Styles/selectBranch.css'

function SelectBranch() {
    const navigate = useNavigate();

    const temp = useContext(ContextProvider);
    const setCurrentOperation = temp.setCurrentOperation;

    const operationClicked = (operation) => {
        setCurrentOperation(operation);
        navigate('/rules')
    }

    return (
        <div className="SelectBranch">
            <h1 class="heading">Choose one:</h1>
            <div class="bubbles">
                <button class="bubble1" onClick={() => operationClicked('Addition')}>Addition</button>
                <button class="bubble2" onClick={() => operationClicked('Subtraction')}>Subtraction</button>
                <button class="bubble3" onClick={() => operationClicked('Multiplication')}>Multiplication</button>
                <button class="bubble4" onClick={() => operationClicked('Division')}>Division</button>
            </div>
        </div>
      );
}

export default SelectBranch;