import { textList } from "../../pages/home.js";

export function textPut(req, res) {
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
}