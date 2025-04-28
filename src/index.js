import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express.JS</title>
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Projekto pavadinimas" />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <h1>Labas rytas, Lietuva!</h1>
</body>
</html>`);
});

app.get('/css/main.css', (req, res) => {
    res.send('RESET CSS KODAS....');
});

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}/`);
});