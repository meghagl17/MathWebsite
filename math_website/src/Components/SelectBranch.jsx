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
            <button class="bubble" onClick={() => operationClicked('Addition')}>Addition</button>
            <button class="bubble" onClick={() => operationClicked('Subtraction')}>Subtraction</button>
            <button class="bubble" onClick={() => operationClicked('Multiplication')}>Multiplication</button>
            <button class="bubble" onClick={() => operationClicked('Division')}>Division</button>
        </div>
      );
}

export default SelectBranch;