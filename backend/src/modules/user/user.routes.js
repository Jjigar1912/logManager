import express from 'express';
import userController from './user.controller.js';
import validate from '../../../helper/validation.js';
import { login, signup } from './user.validation.js';

const router = express.Router();

router.post('/signup', validate(signup), userController.signup);
router.post('/login',validate(login),userController.login);

export default router;
