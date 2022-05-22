'use strict'

const id = document.querySelector('#id');
const pwd = document.querySelector('#pwd');
const loginBtn = document.querySelector('button');


function login() {
  const req = {
    id: id.value,
    pwd: pwd.value,
  };

  fetch();
}

loginBtn.addEventListener('click', login);