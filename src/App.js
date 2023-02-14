/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counterSlice';
import './App.css';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  display: inline-flex;

  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
        <div>
          <ButtonStyle
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            <span>+</span>
          </ButtonStyle>
          <ButtonStyle
            aria-label=" decrement value"
            onClick={() => dispatch(decrement())}
          >
            <span>-</span>
          </ButtonStyle>
        </div>
      </header>
    </div>
  );
}

export default App;
