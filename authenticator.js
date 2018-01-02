const preText = "Password: ";
const app = document.getElementById("app");
const totpObj = new TOTP();

const getHTML = (site, secret) => {
    const html = document.createElement("h1");
    html.innerHTML = `${site}: ${secret}`;
    return html;
};

const secrets = Object.keys(auths).map(auth => getHTML(auth, totpObj.getOTP(auths[auth])));

secrets.forEach(html => app.appendChild(html));
