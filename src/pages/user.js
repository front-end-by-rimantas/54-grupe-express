import { pageTitle } from "../components/pageTitle.js";
import { baseTemplate } from "../templates/baseTemplate.js";

export function pageUser(req, res) {
    res.send(baseTemplate('User buzer', 2, pageTitle(`User id: ${req.params.userId}`)));
}