import { textList } from "../../pages/home.js";

export function textPost(req, res) {
    textList.push(req.body.text);

    return res.json({
        status: 'success',
        msg: 'Sukurtas naujas tekstas',
    });
}