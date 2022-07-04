import joi from "joi";

const validateInputSchema = joi.object({
  value: joi.number().required(),
  description: joi.string().required(),
});

export { validateInputSchema };
