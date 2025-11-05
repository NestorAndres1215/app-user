// Middleware para rutas que requieren sesión activa
import { MESSAGES } from "../utils/constants.js";
import { redirectWithMessage } from "./authHelpers.js";
export const authMiddleware = (req, res, next) => {
  const user = req.session.user;

  if (!user) return redirectWithMessage(res, "/login", MESSAGES.LOGIN_REQUIRED);

  if (user.status?.name !== "active")
    return redirectWithMessage(res, "/login", MESSAGES.ACCOUNT_INACTIVE);

  next();
};

// Middleware para permitir solo administradores
export const adminMiddleware = (req, res, next) => {
  const user = req.session.user;

  if (!user) return redirectWithMessage(res, "/login", MESSAGES.LOGIN_REQUIRED);

  if (user.role?.name !== ROLES.ADMIN)
    return redirectWithMessage(res, "/dashboard", MESSAGES.NO_PERMISSION);

  next();
};

// Middleware opcional para rutas de invitados (login / registro)
// Si ya está logueado, lo redirige al dashboard según su rol
export const guestMiddleware = (req, res, next) => {
  if (req.session.user) return res.redirect("/dashboard");
  next();
};