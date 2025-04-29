import express from 'express';
import { pageHome } from './pages/home.js';
import { pageAbout } from './pages/about.js';
import { pageUser } from './pages/user.js';
import { page404 } from './pages/404.js';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', pageHome);
app.get('/about', pageAbout);
app.get('/users/:userId', pageUser);
app.get('*error', page404);

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}/`);
});
