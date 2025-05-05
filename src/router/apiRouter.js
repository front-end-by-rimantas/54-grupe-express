import express from 'express';
import { textPost } from '../api/text/textPost.js';
import { textGet } from '../api/text/textGet.js';
import { textPut } from '../api/text/textPut.js';
import { textDelete } from '../api/text/textDelete.js';
import { updateCountPut } from '../api/update-count/updateCountPut.js';

export const apiRouter = express.Router();

apiRouter.all('/api', (req, res) => {
    return res.status(404).send('Toks adresas negalimas');
});

apiRouter.post('/api/text', textPost);
apiRouter.get('/api/text/:index', textGet);
apiRouter.put('/api/text/:index', textPut);
apiRouter.delete('/api/text/:index', textDelete);

apiRouter.put('/api/update-count/:number', updateCountPut);
