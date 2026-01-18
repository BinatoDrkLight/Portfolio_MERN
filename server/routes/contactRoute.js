import express from 'express';
import { sendMessage } from '../controller/contactController.js';
import mailLimiter from '../middlewares/mailLimiter.js';

const contactRouter = express.Router();

contactRouter.post('/send-message', mailLimiter, sendMessage);

export default contactRouter;