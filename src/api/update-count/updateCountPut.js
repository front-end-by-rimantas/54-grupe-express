import { count } from "../../pages/home.js";

export function updateCountPut(req, res) {
    const n = +req.params.number;
    if (!isNaN(n)) {
        count.value = n;
    }
    return res.send('Gautas skaicius: ' + n);
}