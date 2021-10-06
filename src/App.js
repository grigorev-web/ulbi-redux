
import {useDispatch, useSelector} from 'react-redux'


import './App.css';

function App() {

  const dispatch = useDispatch();
  const ccash = useSelector( state => state.cash.cash);

  const addCash = (cash) => {
    dispatch({
      type: 'ADD_CASH',
      payload: cash
    });
  }

  const getCash = (cash) => {
    dispatch({
      type: 'GET_CASH',
      payload: cash
    });
  }



  return (
    <div className="App">
      <h2>ulbi redux</h2>
      <h3>{ccash}</h3>
      <button onClick={ ()=> addCash(1)}>Положить</button>
      <button onClick={ ()=> getCash(1)}>Снять</button>
    </div>
  );
}

export default App;
