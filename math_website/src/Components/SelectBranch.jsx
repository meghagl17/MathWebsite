import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ContextProvider from '../Context';

function SelectBranch(operation) {
    const navigate = useNavigate();

    const temp = useContext(ContextProvider);
    // const currentOperation = temp.currentOperation;
    const setCurrentOperation = temp.setCurrentOperation;

    const operationClicked = () => {
        setCurrentOperation(operation);
        navigate('/rules')
    }

    return (
        <div className="SelectBranch">
            <button onClick={() => operationClicked('Addition')}>Addition</button>
            <button onClick={() => operationClicked('Subtraction')}>Subtraction</button>
            <button onClick={() => operationClicked('Multiplication')}>Multiplication</button>
            <button onClick={() => operationClicked('Division')}>Division</button>
        </div>
      );
}

export default SelectBranch;