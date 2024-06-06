import './App.css';
import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home'
import SelectBranch from './Components/SelectBranch'
import Context from './Context'
import Rules from './Components/Rules'
import Play from './Components/Play'
import Result from './Components/Result'
import Navbar from './Components/Navbar'
import { StyledEngineProvider } from '@mui/material/styles';


function App() {

    const [currentOperation, setCurrentOperation] = React.useState('');
    const [correctList, setCorrectList] = React.useState([]);
    const [incorrectList, setIncorrectList] = React.useState([]);

    return (
      <div className="App">
        <StyledEngineProvider injectFirst>
          <Navbar />
        </StyledEngineProvider>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SelectBranch" element={
                  <Context.Provider
                    value={{setCurrentOperation}}>
                    <SelectBranch />
                  </Context.Provider>
                } />
                <Route path="/rules" element={<Rules />} />
                <Route path="/play" element={
                  <Context.Provider
                    value={{currentOperation, correctList, setCorrectList, incorrectList, setIncorrectList}}>
                    <Play />
                  </Context.Provider>
                } />
                <Route path="/result" element={
                  <Context.Provider
                    value={{correctList, setCorrectList, incorrectList, setIncorrectList}}>
                    <Result />
                  </Context.Provider>
                } />
              </Routes>
          </BrowserRouter>
      </div>
    );
}

export default App;
