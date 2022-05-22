'use strict';


const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const users = {
  id: ['음바페', '메시', '포그바'],
  pwd: ['1234', '1234', '1234']
}

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const pwd = req.body.pwd;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.pwd[idx] === pwd) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: '로그인에 실패하셨습니다.',
    })
  },
};

module.exports = {
  output,
  process,
};