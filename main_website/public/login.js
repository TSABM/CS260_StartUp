///powers mode select
(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    document.querySelector('#playerName').textContent = userName;
    setDisplay('loginControls', 'none');
    setDisplay('playControls', 'block');
    setDisplay('playLink', 'block')
    setDisplay('scoresLink', 'block')
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('playControls', 'none');
    setDisplay('playLink', 'none')
    setDisplay('scoresLink', 'none')
  }
})();

 //login
async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}
//register
async function createUser() {
  loginOrCreate(`/api/auth/create`);
}
//login or create, powers the log in or register processes
async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#userName')?.value;
  const password = document.querySelector('#userPassword')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem('userName', userName);
    window.location.href = 'play.html';
  } else {
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

//play
function play() {
  window.location.href = 'play.html';
}
//logout
function logout() {
  localStorage.removeItem('userName');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}

// not sure the purpose of this last one, it doesnt appear to be called anywhere... but mine is crashing and simon uses it so trying it
async function getUser(email) {
  let scores = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}