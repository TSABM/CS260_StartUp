function login() { //faciliates login, rn does not check password only for a name
  const nameEl = document.querySelector("#nameInput");
  localStorage.setItem("userName", nameEl.value);
  window.location.href = "play.html";
} 