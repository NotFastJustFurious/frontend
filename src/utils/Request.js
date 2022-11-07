const BACKEND_BASE_URL = "http://localhost:3001/api/";

function sendRequest(method, path, bodyObject) {
    let body = bodyObject ? JSON.stringify(bodyObject) : undefined;
    return fetch(BACKEND_BASE_URL + path, {
        cache: "no-cache",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body,
    });
}

function sendAuthLogin(username, password) {
    return sendRequest("POST", "login", {username, password});
}

function sendAuthLogout() {
    return sendRequest("DELETE", "login");
}

function sendProfileGet() {
    return sendRequest("GET", "profile");
}

exports.sendAuthLogin = sendAuthLogin;
exports.sendAuthLogout = sendAuthLogout;
exports.sendProfileGet = sendProfileGet;