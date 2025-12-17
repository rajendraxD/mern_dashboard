const apiErrorHandle = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: 0, message: "Internal server error" });
};
export default apiErrorHandle;
