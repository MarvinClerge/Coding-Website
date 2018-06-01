const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

const submitChallenge = (data) => {
  return fetch('https://guarded-citadel-80230.herokuapp.com/api/v1/submit', {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      ...data
    })
  })
  .then(response => response.json())
}

const getChallenges = () => {
  return fetch('https://guarded-citadel-80230.herokuapp.com/api/v1/challenges')
  .then(response => response.json())
}

const challengeAdapter = {
  submitChallenge: submitChallenge,
  getChallenges: getChallenges
}
export default challengeAdapter
