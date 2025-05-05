import express from 'express';
import { count, pageHome, textList } from './pages/home.js';
import { pageAbout } from './pages/about.js';
import { pageUser } from './pages/user.js';
import { page404 } from './pages/404.js';
const app = express();
const port = 3000;

// kodas, kur padeda gauti POST duomenis?????

app.use(express.static('public'));
app.use(express.json());

app.get('/', pageHome);
app.get('/about', pageAbout);
app.get('/users/:userId', pageUser);

app.all('/api', (req, res) => {
    return res.status(404).send('Toks adresas negalimas');
});

app.post('/api/text', (req, res) => {
    textList.push(req.body.text);

    return res.json({
        status: 'success',
        msg: 'Sukurtas naujas tekstas',
    });
});

app.put('/api/text/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (isNaN(index) || req.params.index !== '' + index) {
        return res.json({
            status: 'error',
            msg: 'Index turi buti sveikasis skaicius',
        });
    }

    if (index < 0) {
        return res.json({
            status: 'error',
            msg: 'Index negali buti neigiamas',
        });
    }

    if (index > textList.length) {
        return res.json({
            status: 'error',
            msg: 'Per didelis index\'as',
        });
    }

    if (typeof req.body !== 'object'
        || Array.isArray(req.body)
        || null) {
        return res.json({
            status: 'error',
            msg: 'Duomenys turi buti objekto strukturos',
        });
    }

    if (Object.keys(req.body).length !== 1 || !('text' in req.body)) {
        return res.json({
            status: 'error',
            msg: 'Duomenu objektas turi tureti raktus: text',
        });
    }

    if (typeof req.body.text !== 'string') {
        return res.json({
            status: 'error',
            msg: 'Rakto "text" reiksme turi buti tekstine',
        });
    }

    textList[index] = req.body.text;

    return res.json({
        status: 'success',
        msg: 'Tekstas sekmingai atnaujintas',
    });
});

app.put('/api/update-count/:number', (req, res) => {
    const n = +req.params.number;
    if (!isNaN(n)) {
        count.value = n;
    }
    return res.send('Gautas skaicius: ' + n);
});

app.get('*error', page404);

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}/`);
});
