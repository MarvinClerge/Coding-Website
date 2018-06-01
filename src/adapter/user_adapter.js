const token = localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json',
  'Authorization': token
}

const signup = input => {
  return fetch('https://guarded-citadel-80230.herokuapp.com/api/v1/signup', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      username: input.username,
      password: input.password,
      passwordConfirmation: input.passwordConfirmation
    })
  })
  .then(res => res.json())
}

const login = input => {
  return fetch('https://guarded-citadel-80230.herokuapp.com/api/v1/login', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      username: input.username,
      password: input.password
    })
  })
  .then(res => res.json())
}

const currentUser = token => {
  return fetch('https://guarded-citadel-80230.herokuapp.com/api/v1/current_user', {
    headers: headers
  })
  .then(response => response.json())
}

const userAdapter = {
  signup: signup,
  login: login,
  currentUser: currentUser
}

export default userAdapter
