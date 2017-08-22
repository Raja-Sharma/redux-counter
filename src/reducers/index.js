import { combineReducers } from 'redux'
import ReducerCount from './ReducerCount'

const rootReducer = combineReducers({
  count: ReducerCount
})

export default rootReducer
