let someArray = [1, "string", false];

for (let entry in someArray) {
	console.log(entry);
}

for (let entry of someArray) {
	console.log(entry);
}