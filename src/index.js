import express from 'express';
import { count, pageHome, textList } from './pages/home.js';
import { pageAbout } from './pages/about.js';
import { pageUser } from './pages/user.js';
import { page404 } from './pages/404.js';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', pageHome);
app.get('/about', pageAbout);
app.get('/users/:userId', pageUser);

app.get('/api/add-text/:text', (req, res) => {
    textList.push(req.params.text.replaceAll('-', ' '));
    res.send('Labas ir tau');
});

app.get('/api/update-count/:number', (req, res) => {
    const n = +req.params.number;

    if (!isNaN(n)) {
        count.value = n;
    }

    res.send('Gautas skaicius: ' + n);
});

app.get('*error', page404);

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}/`);
});
