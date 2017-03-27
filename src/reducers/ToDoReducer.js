import { ADD_TODO, REMOVE_TODO } from '../constants/ActionTypes'

const initialState = {
  todos: []
}

function todoState(state = initialState, action) {
  const {todos} = state
  const {type, payload} = action

  switch (type) {
    case ADD_TODO:
        return {
          ...state,
          todos: [payload, ...todos]
        }
    case REMOVE_TODO:
        return {
          ...state,
          todos: todos.filter((todo, i) => i !== payload)
        }
    default:
        return state
  }
}

export default todoState
