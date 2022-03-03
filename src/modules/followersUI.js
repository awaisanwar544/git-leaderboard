function getCardForUser(user) {
  const card = document.createElement('div');
  card.classList.add('user-card');
  card.innerHTML = `
      <img src="${user.avatar_url}" alt="">
      <p>${user.name}</p>
      <p>Total followers: ${user.followers}</p>
      <a href='${user.html_url}'>Profile</a>
  `;
  return card;
}
export default getCardForUser;