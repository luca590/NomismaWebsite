export function userLoginApi (email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === password) {
        resolve(true)
      } else {
        resolve(false)
      }
    }, 1000)
  })
}

export function userLogoutApi () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 1000)
  })
}
