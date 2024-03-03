import express from 'express';
import userController from './user.controller.js';
import validate from '../../../helper/validation.js';
import { signup } from './user.validation.js';

const router = express.Router();

router.post('/signup', validate(signup), userController.signup);

export default router;
