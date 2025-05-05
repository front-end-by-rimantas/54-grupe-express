import express from 'express';
import { page404 } from './pages/404.js';
import { pageRouter } from './router/pageRouter.js';
import { apiRouter } from './router/apiRouter.js';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.use('/', pageRouter);
app.use('/', apiRouter);

app.get('*error', page404);

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}/`);
});
