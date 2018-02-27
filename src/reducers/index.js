import { combineReducers } from 'redux'

const initialLoginState = {
  isLoggedIn: false
}

function loginReducer (state = initialLoginState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        isLoggedIn: false
      }
    case 'USER_LOGOUT':
      return {
        ...state
      }
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true
      }
    case 'USER_LOGIN_FAILURE':
      return {
        ...state,
        isLoggedIn: false
      }
    case 'USER_LOGOUT_SUCCESS':
      return {
        ...state,
        isLoggedIn: false
      }
    case 'USER_LOGOUT_FAILURE':
      return {
        ...state
      }
    default:
      return state
  }
}

const initialAppRootState = {
  theme: false
}

function appRootReducer (state = initialAppRootState, action) {
  switch (action.type) {
    case 'TOGGLETHEME':
      return {
        ...state,
        theme: !action.theme
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  appRootReducer,
  loginReducer
})

export default reducer
