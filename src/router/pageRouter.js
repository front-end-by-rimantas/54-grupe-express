import express from 'express';
import { pageHome } from '../pages/home.js';
import { pageAbout } from '../pages/about.js';
import { pageUser } from '../pages/user.js';

export const pageRouter = express.Router();

pageRouter.get('/', pageHome);
pageRouter.get('/about', pageAbout);
pageRouter.get('/users/:userId', pageUser);