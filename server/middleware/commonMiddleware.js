exports.checkID = function (req, res, next, value) {
  // const { id } = req.params;
  const numberID = parseInt(val);
  if (numberID > items.length || numberID <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの数字が大きすぎます",
    });
  }
  next();
};
