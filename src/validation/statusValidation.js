// src/validations/statusValidation.js
import Joi from "joi";

export const createStatusSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
});

export const updateStatusSchema = Joi.object({
  name: Joi.string().min(2).max(50).optional(),
});
