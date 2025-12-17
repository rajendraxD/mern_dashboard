const unknownRouterHandler = (req, res, next) => {
  console.error(`${req.method} [${req.originalUrl}] - method/api is wrong`);
  res.status(404).json({ status: 0, message: "Route not found" });
  next();
};
export default unknownRouterHandler;
