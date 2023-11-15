function login() {
    const nameEl = document.querySelector("#nameInput");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
  }