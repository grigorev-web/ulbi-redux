
import initialState from './initialState'


const customerReducer = (state = initialState, action)=>{
  switch (action.type) {
    case 'ADD_CUSTOMER':
      console.log("ADD_CUSTOMER")
      return {...state, customers: [...state.customers, {id: Date.now(),name:action.payload}]};

      break;

    case 'REMOVE_CUSTOMER':
      return {...state, customers: state.customers.filter( (customer)=>customer.id !== action.payload)}
      break;

    case 'REMOVE_ALL_CUSTOMERS':
      return {...state, customers: []}


    default: return state;

  }
}

export default customerReducer;
