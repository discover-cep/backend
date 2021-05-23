import Joi from 'joi';
import type { RequestHandler } from 'express';

// eslint-disable-next-line consistent-return
const cepValidation: RequestHandler = (req, res, next) => {
  const schema = Joi.object({
    cep: Joi.string().length(8).required(),
  });
  const options = {
    abortEarly: false,
  };
  const Validation = schema.validate(req.params, options);

  if (Validation.error) {
    const validationErrorMessage = `Validation error: ${Validation.error.details
      .map((x) => x.message)
      .join(', ')}`;
    return res.status(400).json({
      error: validationErrorMessage,
    });
  }
  next();
};

export default cepValidation;
