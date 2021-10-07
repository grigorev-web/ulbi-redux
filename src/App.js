
import {useDispatch, useSelector} from 'react-redux'


import './App.css';

function App() {

  const dispatch = useDispatch();
  const ccash = useSelector( state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)
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

  const addCustomer = (name) => {

    //console.log('addCustomer')

    if(!name) return;

    dispatch({
      type: 'ADD_CUSTOMER',
      payload: name
    });
  }


  const removeCustomer = (id)=>{
    dispatch({
      type: 'REMOVE_CUSTOMER',
      payload: id
    });
  }

  const removeAllCustomers = ()=>{
    dispatch({
      type:'REMOVE_ALL_CUSTOMERS'
    })
  }

  return (
    <div className="App">
      <h2>ulbi redux</h2>
      <h3>{ccash}</h3>
      <button onClick={ ()=> addCash(1)}>Положить</button>
      <button onClick={ ()=> getCash(1)}>Снять</button>

      <button onClick={ ()=> addCustomer(prompt('Имя клиента'))}>Добавить клиента</button>
      <button onClick={removeAllCustomers}>Удалить всех</button>

      <div>{ customers.length ?
          customers.map( (customer) => (
            <div className="customer-card"
                 onClick={()=>removeCustomer(customer.id)}
                 key={customer.id}>{customer.name}</div>))
          :
        <p>Клиентов нет</p>}
      </div>
    </div>
  );
}

export default App;
