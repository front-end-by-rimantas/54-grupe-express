import { baseTemplate } from "../templates/baseTemplate.js";

export function pageUser(req, res) {
    res.send(baseTemplate('User buzer', `<h1>User id: ${req.params.userId}</h1>`));
}