var request = document.getElementById('request');
var response = document.getElementById('response');
var connection = new WebSocket("ws://localhost:8888/kritiq", "json");
connection.onopen = function (evt) {
    console.log("***ONOPEN");
};
connection.onmessage = function (evt) {
    console.log("***ONMESSAGE");
    setResponseText(evt.data);
};
function sendRequest() {
    console.log("***SEND");
    connection.send(response.innerText = request.value);
}
function setResponseText(responseText) {
    response.innerText = responseText;
}
