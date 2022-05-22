'use strict'

const id = document.querySelector('#id');
const pwd = document.querySelector('#pwd');
const loginBtn = document.querySelector('button');


function login() {
  const req = {
    id: id.value,
    pwd: pwd.value,
  };

  fetch('/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then(res => res.json())
    .then(json => console.log(json))
}

loginBtn.addEventListener('click', login);