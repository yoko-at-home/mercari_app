const db = require("../db");
const jwt = require('jsonwebtoken')
// const fs = require("fs");
// const buffer = fs.readFileSync("data.json");
// const { items } = JSON.parse(buffer);

exports.getItems = async function (req, res) {
  try {
    const items = await db.query("SELECT * FROM item");
  //  console.log("result", items.rows);

    res.status(200).json({
      status: "success",
      data: items.rows,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "何かエラーがおきました",
    });
  }
};
//アロー関数の場合
// const getItems = async () => {
//   try {
//     res.status(200).json({
//       status: "success",
//       data: items,
//     });
//   } catch (err) {
//     throw err;
//   }
// };
exports.getItem = async function (req, res) {
  try {
    const { id } = req.params;
    const numberId = parseInt(id);

    const item = await db.query("SELECT * FROM item WHERE id =$1", [numberId]);
    const result = item.rows[0];

    if (!result) {
      return res.status(400).json({
        status: "error",
        message: "データが存在しません",
      });
    }

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      message: "エラーが起こりました",
    });
  }
};

exports.createItem = async function (req, res) {
  const { token, imgUrl, price, description } = req.body

  let id
  try {
    id = jwt.verify(token, process.env.JWT_ACCESS_TOKEN).id
    console.log('decoded', id)
  } catch (err) {
    console.log(err)
  }
  // const newId = items.length + 1;
  // const newItem = Object.assign({}, { id: newId }, req.body);
  // items.push(newItem);
  // fs.writeFileSync("data.json", JSON.stringify({ items: items }));

  const result = await db.query(
    'INSERT INTO item (img_url, price, description, user_id ) VALUES ($1, $2, $3, $4) returning *;',
    [imgUrl, price, description, id]
  )

  // if (!result.rows[0]) { <==次の書き方と同じ
  if (result.rows.length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'データを追加できませんでした',
    })
  }
  res.status(200).json({
    status: 'success',
    data: result.rows[0],
  })
};

exports.updateItem = function (req, res) {
  const { id } = req.params;
  const numberId = parseInt(id);
  if (numberId > items.length || numberId <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの値が大きすぎます",
    });
  }
  res.status(200).json({
    status: "success",
  });
};

exports.deleteItem = function (req, res) {
  const { id } = req.params;
  const numberId = parseInt(id);
  if (numberId > items.length || numberId <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの値が大きすぎます",
    });
  }
  res.status(200).json({
    status: "success",
  });
};
