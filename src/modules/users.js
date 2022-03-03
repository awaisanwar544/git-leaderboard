import getData from './getData.js';

const users = (list) => {
  const allUsers = [];
  list.forEach(async (element) => {
    allUsers.push(getData(element.url));
  });
  return Promise.all(allUsers);
};

export default users;