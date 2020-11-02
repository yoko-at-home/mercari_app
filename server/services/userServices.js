const bcrypt = require("bcrypt");
const db = require("../db");

exports.signup = async (req, res) => {
  console.log("req.body", req.body);
  try {
    const email = req.body.email;
    const result = await db.query('SELECT * FROM "user" WHERE email = $1', [
      email,
    ]);

    if (result.rows.length > 0) {
      return res.status(400).json({
        status: "fail",
        message: "すでにそのEmailは登録されています",
      });
    }
    const password = req.body.password;
    await bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(400).json({
          status: "error",
          message: "暗号化する過程で問題が発生しました",
        });
      }
      db.query('INSERT INTO "user" (email, password) VALUES ($1, $2)', [
        email,
        hash,
      ]);
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
    const email = req.body.email;
    const result = await db.query('SELECT * FROM "user" WHERE email = $1', [
      email,
    ]);
    if (result.rows.length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "Emailが登録されていません",
      });
    }
    const password = req.body.password;
    const databasepassword = result.rows[0].password;
    await bcrypt.compare(password, databasepassword, (err, same) => {
      if (err) {
        return res.status(400).json({
          status: "error",
          message: "パスワードを比較している最中にエラーが発生しました",
        });
      }
      if (!same) {
        return res.status(400).json({
          status: "fail",
          message: "パスワードが一致しませんでした",
        });
      }
    });
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Loginの途中でエラーが起こりました",
    });
  }
};
