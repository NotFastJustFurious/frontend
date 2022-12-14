const { default: Profile } = require("../page/profile/EditProfile");

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
    return sendRequest("POST", "login", { username, password });
}

function sendAuthLogout() {
    return sendRequest("DELETE", "login");
}

/**
 *
 * @param data {{username, firstName, lastName, password, gender, dob}}
 * @returns {Promise<Response>}
 */
function sendAuthRegister(data) {
    return sendRequest("POST", "register", data);
}

function sendProfileEdit(data) {
    return sendRequest("PATCH", "profile", data);
}


function sendProfileGet() {
    return sendRequest("GET", "profile");
}

function sendTherapySessionGet() {
    return sendRequest("GET", "therapy");
}

function sendTherapySendMessagePatient(message) {
    return sendRequest("POST", "therapy/message", {
        message
    })
}

function sendTherapistSessionList() {
    return sendRequest("GET", "therapy/list")
}

function sendCreateTherapySession() {
    return sendRequest("POST", "therapy/create");
}

function sendCloseTherapySession(patient) {
    return sendRequest("POST", "therapy/close", { patient });
}

function sendAddRecord(patient, note, rate, condition) {
    return sendRequest("POST", "record/add", { patient, note, rate, condition });
}

function sendRecordGet() {
    return sendRequest("GET", "record")
}

function sendRecordGetSelf() {
    return sendRequest("GET", "record/self")
}

function sendSurveyResponse(anx, dep, ptsd, ocd, ed) {
    return sendRequest("POST", "survey/add", { anx, dep, ptsd, ocd, ed });
}

exports.sendAuthLogin = sendAuthLogin;
exports.sendAuthLogout = sendAuthLogout;
exports.sendProfileGet = sendProfileGet;
exports.sendAuthRegister = sendAuthRegister;
exports.sendProfileEdit = sendProfileEdit;
exports.sendTherapySessionGet = sendTherapySessionGet;
exports.sendCreateTherapySession = sendCreateTherapySession;
exports.sendCloseTherapySession = sendCloseTherapySession;
exports.sendTherapySendMessagePatient = sendTherapySendMessagePatient;
exports.sendAddRecord = sendAddRecord;
exports.sendRecordGet = sendRecordGet;
exports.sendRecordGetSelf = sendRecordGetSelf;
exports.sendSurveyResponse = sendSurveyResponse;
exports.sendTherapistSessionList = sendTherapistSessionList;

window.requests = exports;