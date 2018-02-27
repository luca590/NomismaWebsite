import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from '../reducers'
import saga from '../sagas'
import onStateChange from '../services/watchStore'

const persistConfig = {
  key: 'root',
  storage
}

const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, reducer)

export default function configureStore () {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, onStateChange()))
  const persistor = persistStore(store)
  sagaMiddleware.run(saga)
  return { store, persistor }
}
