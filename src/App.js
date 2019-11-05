import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, increment_by_5, decrement, decrement_by_5 } from './actions';

import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment_by_5(5))}>+ 5</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(decrement_by_5(5))}>- 5</button>

      {isLogged 
        ? <h3>I'm logged in!</h3> 
        : <h3>I'm not logged in.</h3>
      }
      
    </div>
  );
}

export default App;
