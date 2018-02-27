import { fromJS } from 'immutable'

const initialState = fromJS({
  company1: '',
  company2: '',
  company3: ''
})

export default function companyReducer (state = initialState, action) {
  switch (action.type) {
    case 'BINDING_COMPANY1':
      return state.set('company1', action.value)
    case 'BINDING_COMPANY2':
      return state.set('company2', action.value)
    case 'BINDING_COMPANY3':
      return state.set('company3', action.value)
  }
  return state
}
