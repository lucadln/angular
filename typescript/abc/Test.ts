let request: HTMLElement = document.getElementById('request');
let response: HTMLElement = document.getElementById('response');

let connection = new WebSocket("ws://localhost:8888/kritiq", "json");

connection.onopen = function(evt) {
	console.log("***ONOPEN");
};

connection.onmessage = function(evt) {
	console.log("***ONMESSAGE");
	setResponseText(evt.data);
};

function sendRequest(): void {
	console.log("***SEND");
  connection.send(response.innerText = (request as HTMLInputElement).value);
}

function setResponseText(responseText: string): void {
	response.innerText = responseText;
}