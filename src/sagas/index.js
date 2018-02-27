import { put, takeEvery } from 'redux-saga/effects'
import { userLoginApi, userLogoutApi } from '../services/api'

const userLogin = function * userLogin (action) {
  try {
    const response = yield userLoginApi(action.payload.email, action.payload.password)
    response ? yield put({ type: 'USER_LOGIN_SUCCESS' }) : yield put({ type: 'USER_LOGIN_FAILURE' })
  } catch (e) {
    yield put({ type: 'USER_LOGIN_FAILURE' })
  }
}

const userLogout = function * userLogout (action) {
  try {
    const response = yield userLogoutApi()
    response ? yield put({ type: 'USER_LOGOUT_SUCCESS' }) : yield put({ type: 'USER_LOGOUT_FAILURE' })
  } catch (e) {
    yield put({ type: 'USER_LOGOUT_FAILURE' })
  }
}

const saga = function * dataSaga () {
  yield takeEvery('USER_LOGIN', userLogin)
  yield takeEvery('USER_LOGOUT', userLogout)
}

export default saga
