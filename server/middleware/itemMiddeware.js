exports.checkItem = (req, res, next) => {
  // if (!req.body.likes || !req.body) {
  if (
    // !req.body.like ||
    !req.body.title ||
    !req.body.price ||
    !req.body.imgUrl
  ) {
    res.status(400).json({
      status: "fail",
      message: "itemsのオブジェクト形式に沿っていない",
    });
  }
  // 次のミドルウェアを呼ぶための関数
  next();
};
