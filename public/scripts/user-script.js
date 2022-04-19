import 
{ fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } 
from './main.js'

const loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const pswd = document.getElementById("pswd").value;
  fetchData('/users/login', {username: name, password: pswd}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "questions.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#login-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });
}

const regForm = document.getElementById("registerForm");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const pswd = document.getElementById("pswd").value;
  
  postData('/users/register', {username: name, password: pswd})
  .then((data) => {
    if(!data.message) {
      window.location.href = "questions.html";
    }
  })
  .catch((error) => {
    const errText = error.message
    document.querySelector("#registerForm p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  })

  fetchData('/users/register', {username: name, password: pswd}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "questions.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#registerForm p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });
}
