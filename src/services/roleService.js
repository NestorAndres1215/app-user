import Role from "../models/Role.js";
import { createRoleSchema, updateRoleSchema } from "../validations/roleValidation.js";
import { MESSAGES } from "../utils/constants.js";

const getAllRoles = async () => {
  return await Role.findAll();
};

const getRoleById = async (id) => {
  const role = await Role.findByPk(id);
  if (!role) {
    const error = new Error(MESSAGES.ROLE_NOT_FOUND);
    error.statusCode = 404;
    throw error;
  }
  return role;
};

const createRole = async (data) => {
  const { error } = createRoleSchema.validate(data);
  if (error) {
    const validationError = new Error(MESSAGES.INVALID_DATA);
    validationError.statusCode = 400;
    validationError.errors = error.details.map((d) => d.message);
    throw validationError;
  }

  return await Role.create(data);
};

const updateRole = async (id, data) => {
  const { error } = updateRoleSchema.validate(data);
  if (error) {
    const validationError = new Error(MESSAGES.INVALID_DATA);
    validationError.statusCode = 400;
    validationError.errors = error.details.map((d) => d.message);
    throw validationError;
  }

  const [updated] = await Role.update(data, { where: { id } });
  if (!updated) {
    const error = new Error(MESSAGES.ROLE_NOT_FOUND);
    error.statusCode = 404;
    throw error;
  }
  return await getRoleById(id);
};

const deleteRole = async (id) => {
  const deleted = await Role.destroy({ where: { id } });
  if (!deleted) {
    const error = new Error(MESSAGES.ROLE_NOT_FOUND);
    error.statusCode = 404;
    throw error;
  }
  return true;
};

export default {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
