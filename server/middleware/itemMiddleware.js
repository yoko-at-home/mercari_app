exports.checkItem = (req, res, next) => {
  if (!req.body.like || !req.body) {
    res.status(400).json({
      status: "fail",
      message: "itemsのオジュジェクト形式に沿っていない",
    });
  }
  // 次のミドルウェアを呼ぶための関数
  next();
};
