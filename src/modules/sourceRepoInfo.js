import getData from './getData.js';

const TARGET_URL = 'https://api.github.com/repos/awaisanwar544/git-leaderboard';
const header = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  mode: 'cors',
};

const sourceRepoInfo = () => getData(TARGET_URL, header).then((data) => data);

export { sourceRepoInfo, header };