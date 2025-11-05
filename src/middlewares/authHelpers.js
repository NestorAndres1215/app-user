// src/middlewares/authHelpers.js
import { MESSAGES } from "../utils/constants.js";

export const redirectWithMessage = (res, path, message) => {
  res.flash("error", message);
  return res.redirect(path);
};
