module.exports = function (req, res, next) {
  //400 -> bad request
  //401 -> Denied/ unauthorised access
  //403 -> Forbiden
  if (!req.user.isAdmin) return res.status(403);
  next();
};
