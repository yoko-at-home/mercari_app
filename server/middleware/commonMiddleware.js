exports.checkId = (req, res, next, val) => {
  const numberId = parseInt(val);
  if (numberId > items.length || numberId <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの値が大きすぎます",
    });
  }
  next();
};
