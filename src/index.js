import './main.css';
import { sourceRepoInfo } from './modules/sourceRepoInfo.js';
import stargazers from './modules/stargazers.js';
import users from './modules/users.js';

async function main() {
  const sourceRepo = await sourceRepoInfo();
  const user = await stargazers(sourceRepo);
  const usersList = await users(user);

  console.log(usersList);
}

main();