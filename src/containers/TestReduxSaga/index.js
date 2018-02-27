import React from 'react'

// Redux configure
// import * as actionsApp from '../App/actions'
// import * as actions from './actions'
// import reducer from './reducer'
// import { makeSelectCompany1, makeSelectCompany2, makeSelectCompany3 } from './selectors'
// import injectReducer from '../../utils/injectReducer'
// import { createStructuredSelector } from 'reselect'
// import { bindActionCreators, compose } from 'redux'
// import { connect } from 'react-redux'

import { Section, Row } from '../../components/General'

class Company extends React.Component {
  goBack () {
    this.props.history.goBack()
  }

  onSubmit () {
    // this.props.history.goBack()
  }

  render () {
    const {company1, company2, company3, bindingCompany1, bindingCompany2, bindingCompany3} = this.props
    const {toggleTheme, theme} = this.props
    return (
      <Section>
        <h1>Company</h1>
        <div>
        </div>
      </Section>
    )
  }
}

// const mapStateToProps = createStructuredSelector({
//   content1: makeSelectCompany1(),
//   content2: makeSelectCompany2(),
//   content3: makeSelectCompany3()
// })

// function mapDispatchToProps (dispatch) {
//   return bindActionCreators(Object.assign({}, actionsApp, actions), dispatch)
// }

// const withConnect = connect(mapStateToProps, mapDispatchToProps)
// const withReducer = injectReducer({key: 'company', reducer})

// export default compose(withReducer, withConnect)(Company)
export default Company
