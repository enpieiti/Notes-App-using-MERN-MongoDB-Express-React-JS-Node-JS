// 1. Tạo middleware để log headers
function logHeaders(req, res, next) {
  console.log("=== Request Headers ===");
  console.log(req.headers); // In object headers ra console
  console.log("======================");
  next(); // Cho phép request đi tiếp
}
module.exports = {
  logHeaders,
};
