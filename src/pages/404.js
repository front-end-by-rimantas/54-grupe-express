import { baseTemplate } from "../templates/baseTemplate.js";

export function page404(req, res) {
    console.log(req.params.error);

    res.send(baseTemplate('404', `
        <h1>404</h1>
        <p>Page not found</p>
        <p>:(</p>
        <p>):</p>`));
}