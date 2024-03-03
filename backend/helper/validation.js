import CustomError from './customError.js';

const validate = (schema) => async (req, res, next) => {
  try {
    if(req.body.userType){
      req.body.userType = req.body.userType.trim().toUpperCase();
    }
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) {
      const details = error.details.map((element) => element.message);
      const e = new CustomError(400, 'BAD REQUEST', details);
      next(e);
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default validate;
