// src/middlewares/roleMiddleware.js
import { MESSAGES } from "../utils/constants.js";
import { redirectWithMessage } from "./authHelpers.js";

// Middleware genérico para verificar roles
export const requireRole = (role, redirectPath = "/dashboard") => (req, res, next) => {
  const user = req.session.user;

  if (!user) return redirectWithMessage(res, "/login", MESSAGES.LOGIN_REQUIRED);

  if (user.role !== role) {
    let message;
    switch (role) {
      case ROLES.ADMIN:
        message = MESSAGES.NO_PERMISSION_ADMIN;
        break;
      case ROLES.USER:
        message = MESSAGES.NO_PERMISSION_USER;
        break;
      default:
        message = MESSAGES.NO_PERMISSION;
    }

    return redirectWithMessage(res, redirectPath, message);
  }

  next();
};