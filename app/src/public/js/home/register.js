'use strict'

const id = document.querySelector('#id');
const name = document.querySelector('#name');
const pwd = document.querySelector('#pwd');
const confirmPwd = document.querySelector('#confirm-pwd');
const registerBtn = document.querySelector('#button');

function register() {
  const req = {
    id: id.value,
    name: name.value,
    pwd: pwd.value,
    confirmPwd: confirmPwd.value,
  };

  console.log(req)

  fetch('/register', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    }) 
    .catch(err => console.error(new Error('회원가입 중 에러 발생')));
}

registerBtn.addEventListener('click', register);