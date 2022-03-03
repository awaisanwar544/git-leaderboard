import './main.css';
import { sourceRepoInfo } from './modules/sourceRepoInfo.js';
import stargazers from './modules/stargazers.js';
import users from './modules/users.js';
import getCardForUser from './modules/followersUI.js'

async function main() {
  const sourceRepo = await sourceRepoInfo();
  const user = await stargazers(sourceRepo);
  const usersList = await users(user);
  usersList.sort((first, second) => {
    if (first.followers > second.followers) return -1;
    if (first.followers < second.followers) return 1;
    return 0;
  });
  const container = document.getElementById('leaders-container');
  usersList.forEach((user) => {
    container.appendChild(getCardForUser(user));
  });
  console.log(usersList);
}

main();