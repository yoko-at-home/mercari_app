exports.checkItem = (req, res, next) => {
  //  console.log(req.body)
  if (
    !req.body.description ||
    !req.body.price ||
    !req.body.imgUrl ||
    !req.body.token
  ) {
    res.status(400).json({
      status: 'fail',
      message: 'itemsのオブジェクト形式に沿っていない',
    })
  }
  // 次のミドルウェアを呼ぶための関数
  next()
};
