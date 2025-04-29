import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function baseTemplate(title, activeMenuIndex, pageContent) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head(title)}
        <body>
            ${header(activeMenuIndex)}
            <main>${pageContent}</main>
            ${footer()}
            <script src="/js/main.js"></script>
        </body>
        </html>`;
}