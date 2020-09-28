exports.checkId = function (req, res, next, val) {
  // const { id } = req.params;
  const numberId = parseInt(val);
  if (numberId > items.length || numberId <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの数字が大きすぎます",
    });
  }
  next();
};
