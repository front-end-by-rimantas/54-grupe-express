import { baseTemplate } from "../templates/baseTemplate.js";

export function pageHome(req, res) {
    res.send(baseTemplate('', '<h1>Labas rytas, Lietuva!</h1>'));
}