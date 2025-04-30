import express from 'express';
import { count, pageHome, textList } from './pages/home.js';
import { pageAbout } from './pages/about.js';
import { pageUser } from './pages/user.js';
import { page404 } from './pages/404.js';
const app = express();
const port = 3000;

// kodas, kur padeda gauti POST duomenis?????

app.use(express.static('public'));

app.get('/', pageHome);
app.get('/about', pageAbout);
app.get('/users/:userId', pageUser);

app.all('/api', (req, res) => {
    res.status(404).send('Toks adresas negalimas');
});

app.post('/api/text', (req, res) => {
    console.log(req.body);

    // textList.push();
    res.send('Sukurtas naujas tekstas');
});
app.put('/api/text/:index/:text', (req, res) => {
    textList[req.params.index] = req.params.text.replaceAll('-', ' ');
    res.send('Tekstas sekmingai atnaujintas');
});

app.put('/api/update-count/:number', (req, res) => {
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
