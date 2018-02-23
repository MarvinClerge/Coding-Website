const token = localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json',
  'Authorization': token
}

const signup = state => {
  return fetch('http://localhost:3001/api/v1/signup', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      username: state.signupUsername,
      password: state.signupPassword,
      passwordConfirmation: state.signupPasswordConfirmation
    })
  })
  .then(res => res.json())
}

const login = state => {
  return fetch('http://localhost:3001/api/v1/login', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      username: state.loginUsername,
      password: state.loginPassword
    })
  })
  .then(res => res.json())
}

const currentUser = token => {
  console.log('fetching data');
  return fetch('http://localhost:3001/api/v1/current_user', {
    headers: headers
  })
}

const userAdapter = {
  signup: signup,
  login: login,
  currentUser: currentUser
}
export default userAdapter
