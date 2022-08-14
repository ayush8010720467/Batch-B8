import { MINUS_COUNT, ADD_COUNT } from './action'
export function reduceAction(state = { number : 0}, action) {
  switch (action.type) {
    case ADD_COUNT:
      return {...state, number: state.number + 1};
    case MINUS_COUNT:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
}