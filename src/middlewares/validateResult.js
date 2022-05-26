const { validationResult } = require("express-validator");

const validateResult = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ msg: "Parametros inválidos!", error: errors.array() });
  }
  return next();
};

export default validateResult;
