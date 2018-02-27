export function userLogin (email, password) {
  return {
    type: 'USER_LOGIN',
    payload: { email, password }
  }
}

export function userLogout () {
  return {
    type: 'USER_LOGOUT'
  }
}

export function toggleTheme (theme) {
  return {
    type: 'TOGGLETHEME',
    theme
  }
}
