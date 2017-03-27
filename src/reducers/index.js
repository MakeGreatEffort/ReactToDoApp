import { combineReducers } from 'redux'
import todoState from './ToDoReducer'

const rootReducer = combineReducers({
  todoState
})

export default rootReducer
