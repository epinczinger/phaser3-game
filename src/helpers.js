const gameID = '0KGv8uliIq1oCADYip7j';
const fetch = require('node-fetch');

export default {
  submitNameForm: (input) => {
    let username = input.value;
    if (username === '') {
      username = 'Nobody';
    }

    localStorage.setItem('username', username);
  },

  fetchScores: () => {
    return fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`,
      { mode: 'cors' },
    ).then((response) => response.json());
  },

  submitScore: (username, score) => {
    fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: username,
          score: score.toString(),
        }),
      },
    );
  },
};
