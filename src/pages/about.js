import { baseTemplate } from "../templates/baseTemplate.js";

export function pageAbout(req, res) {
    res.send(baseTemplate('About', '<h1>About</h1>'));
}