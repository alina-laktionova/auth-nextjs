const bcrypt = require("bcryptjs");

export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  console.log(hashedPassword);
  return hashedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = await bcrypt.compare(password, hashedPassword);
  console.log(isValid);
  return isValid;
};
