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
    .then(json => {
      if (json.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch(err => console.error(new Error('로그인 중 에러 발생')));
}

loginBtn.addEventListener('click', login);