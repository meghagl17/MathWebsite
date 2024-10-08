import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import SelectBranch from './Components/SelectBranch';
import Context from './Context';
import Rules from './Components/Rules';
import Play from './Components/Play';
import Result from './Components/Result';
import Navbar from './Components/Navbar'; // Make sure Navbar is updated to use Chakra UI
import { Analytics } from "@vercel/analytics/react";

function App() {
    const [currentOperation, setCurrentOperation] = React.useState('');
    const [correctList, setCorrectList] = React.useState([]);
    const [incorrectList, setIncorrectList] = React.useState([]);
    const [timeLimit, setTimeLimit] = React.useState();

    return (
        <div className="App">
          <Router>
            <Navbar />
            {/* <BrowserRouter> */}
                <Routes>
                    <Route path="/" element={
                        <Context.Provider value={{ setCorrectList, setIncorrectList }}>
                            <Home />
                        </Context.Provider>
                    } />
                    <Route path="/SelectBranch" element={
                        <Context.Provider value={{ setCurrentOperation }}>
                            <SelectBranch />
                        </Context.Provider>
                    } />
                    <Route path="/rules" element={
                      <Context.Provider
                            value={{ timeLimit, setTimeLimit}}>
                            <Rules />
                        </Context.Provider>
                    } />
                    <Route path="/play" element={
                        <Context.Provider
                            value={{ currentOperation, correctList, setCorrectList, incorrectList, setIncorrectList, timeLimit, setTimeLimit}}>
                            <Play />
                        </Context.Provider>
                    } />
                    <Route path="/result" element={
                        <Context.Provider
                            value={{ correctList, incorrectList }}>
                            <Result />
                        </Context.Provider>
                    } />
                </Routes>
            {/* </BrowserRouter> */}
            </Router>
            <Analytics />
        </div>
    );
}

export default App;
