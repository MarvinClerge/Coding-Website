import { combineReducers } from 'redux'
import auth from './auth'
import code from './code'

export default combineReducers({
  auth, code
})
