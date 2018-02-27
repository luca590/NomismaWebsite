// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api'
// })

export default function () {
  return function (store) {
    return function (next) {
      return function (action) {
        var prevState = store.getState()
        var result = next(action)
        var nextState = store.getState()

        if (prevState !== nextState) {
          console.log('===Track State Chages===', JSON.parse(JSON.stringify(nextState)))

          // api.post('trackState', nextState)
          // .then((res) => {
          //   console.log(res)
          // })
        }
        return result
      }
    }
  }
}
