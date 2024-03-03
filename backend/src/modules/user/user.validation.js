import Joi from 'joi';

const checkname = (value, helper) => {
  const regex = /^[a-zA-Z ]{3,}$/;
  if (!(regex.test(value.trim()))) {
    return helper.message('Name can only contain alphabets and space.');
  }
  return true;
};

const checkusername = (value, helper) => {
  const regex = /^[^ ]{3,}$/;
  if (!regex.test(value.trim())) {
    return helper.message('Username can never contains space.');
  }
  return true;
};

const checkPassword = (value, helper) => {
  const regex = /^(?=.*\d)(?=.*[a-zA-Z ])(?=.*[^a-zA-Z\d]).{8,}$/;
  if (!regex.test(value.trim())) {
    return helper.message('Password must contain numbers , alphabets , special character and min-length of 8 .');
  }
  return true;
};

const signup = Joi.object({
  username: Joi.string().custom(checkusername).trim().required(),
  name: Joi.string().custom(checkname).trim().required(),
  password: Joi.string().custom(checkPassword).trim().required(),
  email: Joi.string().email().trim().required(),
});

export {
  signup,
};
