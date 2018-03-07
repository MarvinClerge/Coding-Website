const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

const submitChallenge = (value) => {
  return fetch('http://localhost:3001/api/v1/submit', {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      ...value
    })
  })
  .then(response => response.json())
}

const getChallenges = () => {
  return fetch('http://localhost:3001/api/v1/challenges')
  .then(response => response.json())
}

const challengeAdapter = {
  submitChallenge: submitChallenge,
  getChallenges: getChallenges
}
export default challengeAdapter
