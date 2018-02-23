const signup = (state) => {
  return fetch('http://localhost:3001/api/v1/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify({
      username: state.signupUsername,
      password: state.signupPassword,
      passwordConfirmation: state.signupPasswordConfirmation
    })
  })
  .then(res => res.json())
}

const login = (state) => {
  return fetch('http://localhost:3001/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify({
      username: state.loginUsername,
      password: state.loginPassword
    })
  })
  .then(res => res.json())
}

const userAdapter = {
  signup: signup,
  login: login
}
export default userAdapter
