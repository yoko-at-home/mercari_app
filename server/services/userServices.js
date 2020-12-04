const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const db = require('../db')

exports.signup = async (req, res) => {
  try {
    console.log('body', req.body)
    const email = req.body.email
    const result = await db.query('SELECT * FROM "user" WHERE email = $1', [
      email,
    ])
    // データが返されていればエラー
    if (result.rows.length > 0) {
      return res.status(400).json({
        status: 'fail',
        message: 'そのメールアドレスはすでに登録されています',
      })
    }
    // if (result.rows !== '*@*') {
    //   console.log('メールアドレス', result.rows)
    //   return res.status(400).json({
    //     status: 'fail',
    //     message: '正しい形式のメールアドレスを入力してください',
    //   })
    // }

    // requestのbodyの項目からパスワードのデータを受け取る
    const password = req.body.password

    // 受け取ったパスワードを暗号化する
    await bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(400).json({
          status: 'error',
          message: '暗号化する過程で問題が発生しました',
        })
      }
      const data = await db.query(
        'INSERT INTO "user" (nickname, email, password, first_name, last_name, first_name_kana, last_name_kana, year, month, day) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *',
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
        id: data.rows[0].id,
        nickname: data.rows[0].nickname,
        email: data.rows[0].email,
      }

      // const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN)
      // console.log('token', token);

      // userのオブジェクトを暗号化し、jsonとして送る
      const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN)

      // ここまでくればうまくいった
      res.status(200).json({
        status: 'success',
        token: token,
      })
    })
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: 'サインアップ処理でエラーが発生しました',
    })
  }
}

exports.login = async (req, res) => {
  try {
    const email = req.body.email
    console.log('email 内容', email)
    const result = await db.query('SELECT * FROM "user" WHERE email = $1', [
      email,
    ])
    if (result.rows.length === 0) {
      return res.status(400).json({
        status: 'fail',
        message: 'このメールアドレスでは登録がありません',
      })
    }
    console.log(result.rows)
    const password = req.body.password

    const databasepassword = result.rows[0].password
    await bcrypt.compare(password, databasepassword, (err, same) => {
      if (err) {
        return res.status(400).json({
          status: 'error',
          message: 'パスワードの比較中にエラーが発生しました',
        })
      }
      if (!same) {
        return res.status(400).json({
          status: 'fail',
          message: 'パスワードが一致しませんでした',
        })
      }
      //
      const user = {
        id: result.rows[0].id,
        nickname: result.rows[0].nickname,
        email: result.rows[0].email,
      }
      jwt.sign(user, process.env.JWT_ACCESS_TOKEN, (err, token) => {
        if (err) {
          return res.status(400).json({
            status: 'error',
            message: 'tokenの暗号化に失敗しました',
          })
        }
        res.status(200).json({
          status: 'success',
          token: token,
        })
      })
    })
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: 'loginの途中でエラーが起こりました',
    })
  }
}

exports.getItemsByUser = async function (req, res) {
  const id = req.body.id
  try {
    if (!id) {
      res.status(400).json({
        status: 'fail',
        message: 'IDが取り出せませんでした',
      })
      return
    }
    const items = await db.query('SELECT * FROM item WHERE user_id = $1', [id])
    res.status(200).json({
      status: 'success',
      data: items.rows,
    })
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'エラーが発生しました',
    })
  }
}
