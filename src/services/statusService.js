import Status from "../models/Status.js";
import { createStatusSchema, updateStatusSchema } from "../validations/statusValidation.js";
import { MESSAGES } from "../utils/constants.js";

const getAllStatus = async () => {
  return await Status.findAll();
};

const getStatusById = async (id) => {
  const status = await Status.findByPk(id);
  if (!status) {
    const error = new Error(MESSAGES.STATUS_NOT_FOUND || "Estado no encontrado");
    error.statusCode = 404;
    throw error;
  }
  return status;
};

const createStatus = async (data) => {
  const { error } = createStatusSchema.validate(data);
  if (error) {
    const validationError = new Error(MESSAGES.INVALID_DATA || "Datos inválidos");
    validationError.statusCode = 400;
    validationError.errors = error.details.map((d) => d.message);
    throw validationError;
  }

  return await Status.create(data);
};

const updateStatus = async (id, data) => {
  const { error } = updateStatusSchema.validate(data);
  if (error) {
    const validationError = new Error(MESSAGES.INVALID_DATA || "Datos inválidos");
    validationError.statusCode = 400;
    validationError.errors = error.details.map((d) => d.message);
    throw validationError;
  }

  const [updated] = await Status.update(data, { where: { id } });
  if (!updated) {
    const error = new Error(MESSAGES.STATUS_NOT_FOUND || "Estado no encontrado");
    error.statusCode = 404;
    throw error;
  }
  return await getStatusById(id);
};

const deleteStatus = async (id) => {
  const deleted = await Status.destroy({ where: { id } });
  if (!deleted) {
    const error = new Error(MESSAGES.STATUS_NOT_FOUND || "Estado no encontrado");
    error.statusCode = 404;
    throw error;
  }
  return true;
};

export default {
  getAllStatus,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus,
};
