function getCardForUser(user, index) {
  const card = document.createElement('div');
  card.classList.add('user-card');
  card.innerHTML = `
      <div class="rank-container">
        <svg
        width="5em"
        viewBox="0 0 210 297"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
      <defs
          id="defs2" />
      <g
          id="layer1">
        <text
            xml:space="preserve"
            style="font-size:200.354px;line-height:1.25;font-family:COCOGOOSE;-inkscape-font-specification:COCOGOOSE;stroke-width:5.00886;fill:#71c837"
            x="24.638449"
            y="225.7619"
            id="text495"><tspan
              class="rank"
              x="24.638449"
              y="225.7619">${index + 1}</tspan></text>
      </g>
    </svg>
      </div>
      <div class="hex">
        <div class="hex-background">
          <img src="${user.avatar_url}" alt="">
        </div>
      </div>
      <div class="card-details">
        <div class="user-details">
          <p class="user-name">${user.name}</p>
          <p class="followers">Followers: ${user.followers}</p>
        </div>
        <div class="profile-link">
          <a href='${user.html_url}'>Profile</a>
        </div>
      </div>
  `;
  return card;
}
export default getCardForUser;