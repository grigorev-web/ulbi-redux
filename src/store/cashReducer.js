
import initialState from './initialState'


const cashReducer = (state = initialState, action)=>{
  switch (action.type) {
    case 'ADD_CASH':
      return {...state, cash: state.cash + action.payload};

      break;

    case 'GET_CASH':
      return {...state, cash: state.cash - action.payload}

    default: return state;

  }
}

export default cashReducer;
