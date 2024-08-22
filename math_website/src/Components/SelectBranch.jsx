import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ContextProvider from '../Context';
import { Box } from '@chakra-ui/react';
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
        <Box
            minH="95vh"
            bgGradient="linear(to-br, teal.400, blue.600)"
            color="white"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <div className="SelectBranch">
                <div class="bubbles">
                    <button class="bubble1" onClick={() => operationClicked('Addition')}>Addition</button>
                    <button class="bubble2" onClick={() => operationClicked('Subtraction')}>Subtraction</button>
                    <button class="bubble3" onClick={() => operationClicked('Multiplication')}>Multiplication</button>
                    <button class="bubble4" onClick={() => operationClicked('Division')}>Division</button>
                </div>
            </div>
        </Box>
      );
}

export default SelectBranch;