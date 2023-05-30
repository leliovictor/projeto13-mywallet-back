function errorHandler(
  error,
  _req,
  res,
  _next
) {

  const { statusCode, message, details } = error;

  return error.statusCode !== 500
    ? res.status(statusCode).send({ message, details })
    : res.status(500).send({
        message: "Internal server error",
        details: error,
      });
}
export default errorHandler;