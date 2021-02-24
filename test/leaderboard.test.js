import helpers from '../src/helpers';

describe("saves an input's value to localStorage", () => {
  const input = document.createElement('input');

  it("saves the given input's value attribute as the value for the localStorage 'username' key", () => {
    input.value = 'Test123';
    helpers.submitNameForm(input);
    expect(localStorage.getItem('username') === 'Test123').toBe(true);
  });

  it("saves the string 'Nobody' as the value for the localStorage 'username' key if input.value is empty", () => {
    input.value = '';
    helpers.submitNameForm(input);
    expect(localStorage.getItem('username') === 'Nobody').toBe(true);
  });
});

describe('fetches leaderboard data from the leaderboard API', () => {
  it("returns a JSON object with a key of 'result'", () => helpers.fetchScores().then((jsonObject) => {
    expect(
      Object.prototype.hasOwnProperty.call(jsonObject, 'result'),
    ).toBeTruthy();
  }));

  it("returns a JSON object with an array object as the value of 'result'", () => helpers.fetchScores().then((jsonObject) => {
    expect(Array.isArray(jsonObject.result)).toBeTruthy();
  }));

  it("has objects stored within the 'result' array, each with a name and score", () => helpers.fetchScores().then((jsonObject) => {
    if (jsonObject.result.length === 0) return true;

    return jsonObject.result.forEach((element) => {
      expect(
        Object.prototype.hasOwnProperty.call(element, 'user'),
      ).toBeTruthy();
      expect(
        Object.prototype.hasOwnProperty.call(element, 'score'),
      ).toBeTruthy();
    });
  }));
});
