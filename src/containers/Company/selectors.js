/**
 * company selectors
 */

import { createSelector } from 'reselect'

const selectCompany = (state) => state.get('company')

const makeSelectCompany1 = () => createSelector(
  selectCompany,
  (companyState) => companyState.get('company1')
)
const makeSelectCompany2 = () => createSelector(
  selectCompany,
  (companyState) => companyState.get('company2')
)
const makeSelectCompany3 = () => createSelector(
  selectCompany,
  (companyState) => companyState.get('company3')
)

export {
  selectCompany,
  makeSelectCompany1,
  makeSelectCompany2,
  makeSelectCompany3
}
