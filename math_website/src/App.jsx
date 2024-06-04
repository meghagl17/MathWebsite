import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home'
import SelectBranch from './Components/SelectBranch'
import Context from './Context'
import Rules from './Components/Rules'

function App() {

    const [currentOperation, setCurrentOperation] = React.useState('');

    return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SelectBranch" element={
                  <Context.Provider
                    value={{currentOperation, setCurrentOperation}}>
                    <SelectBranch />
                  </Context.Provider>
                } />
                <Route path="/rules" element={<Rules />} />
              </Routes>
          </BrowserRouter>
      </div>
    );
}

export default App;
