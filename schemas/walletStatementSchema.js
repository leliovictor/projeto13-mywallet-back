import joi from "joi";

const validateInputSchema = joi.alternatives().try(
  joi.object({
    value: joi.number().required(),
    description: joi.string().required(),
  }),
  joi.object({
    value: joi.number().required(),
    description: joi.string().required(),
    index: joi.number().required(),
  })
);

export { validateInputSchema };
