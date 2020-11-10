const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const db = require('../db')

exports.signup = async (req, res) => {
  // console.log("req.body", req.body);
  try {
    const email = req.body.email
    const result = await db.query('SELECT * FROM "user" WHERE email = $1', [
      email,
    ])
    // データが返されていればエラー
    if (result.rows.length > 0) {
      return res.status(400).json({
        status: 'fail',
        message: "すでにそのEmailは登録されています",
      })
    }

    // requestのbodyの項目からパスワードのデータを受け取る
    const password = req.body.password;

    // 受け取ったパスワードを暗号化する
    await bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(400).json({
          status: "error",
          message: "暗号化する過程で問題が発生しました",
        });
      }
      db.query(
        'INSERT INTO "user" (nickname, email, password, first_name, last_name, first_name_kana, last_name_kana, year, month, day) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        [
          req.body.nickname,
          email,
          hash,
          req.body.firstName,
          req.body.lastName,
          req.body.firstNameKana,
          req.body.lastNameKana,
          req.body.year,
          req.body.month,
          req.body.day,
        ]
      )
      const user = {
        nickname: req.body.nickname,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      }

      // const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN)
      // console.log('token', token);

      // userのオブジェクトを暗号化し、jsonとして遅れる
      const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN);

      // ここまでくればうまくいった
      res.status(200).json({
        status: 'success',
        token: token,
      });
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: "サインアップの途中でエラーが発生しました",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const email = req.body.email
    const result = await db.query('SELECT * FROM "user" WHERE email = $1', [
      email,
    ])
    if (result.rows.length === 0) {
      return res.status(400).json({
        status: 'fail',
        message: 'Emailが登録されていません',
      })
    }
    const password = req.body.password
    const databasepassword = result.rows[0].password
    await bcrypt.compare(password, databasepassword, (err, same) => {
      if (err) {
        return res.status(400).json({
          status: 'error',
          message: 'パスワードを比較している最中にエラーが起こりました',
        })
      }
      if (!same) {
        return res.status(400).json({
          status: 'fail',
          message: 'パスワードが一致しませんでした',
        })
      }
      res.status(200).json({
        status: 'success',
      })
    })
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: 'loginの途中でエラーが起こりました',
    })
  }
}
