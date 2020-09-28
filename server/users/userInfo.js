const fs = require("fs");
const buffer = fs.readFileSync("user.json");
const { users } = JSON.parse(buffer);

exports.getUsers = (req, res) => {
  console.log("hello getUsers");
  res.status(200).json({
    status: "success",
    data: users,
  });
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  const numberId = parseInt(id);
  if (numberId > users.length || numberId <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの数字が大きすぎます",
    });
  }
  const result = items.find((user) => {
    return numberId === user.id;
  });
  if (!result) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDは存在しませんでした",
    });
  }
  res.status(200).json({
    status: "success",
    data: result,
  });
};

exports.createUser = (req, res) => {
  const newId = users.length + 1;
  const newUser = Object.assign({}, { id: newId }, req.body);
  users.push(newItem);
  fs.writeFileSync("user.json", JSON.stringify({ items: items }));
  res.status(200).json({
    status: "success",
    data: users,
  });
};

exports.updateItem = (req, res) => {
  const { id } = req.params;
  const numberId = parseInt(id);
  if (numberId > users.length || numberId <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの数字が大きすぎます",
    });
  }
  res.status(200).json({
    status: "success",
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const numberId = parseInt(id);
  if (numberId > users.length || numberId <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの数字が大きすぎます",
    });
  }
  res.status(200).json({
    status: "success",
  });
};
