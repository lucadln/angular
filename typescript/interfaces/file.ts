interface LabeledValue {
	label: string;
}

function printLabel(labelObj: LabeledValue) {
	console.log(labelObj.label);
}

let myObj = {size: 10, label: "Size 10 object"};
printLabel(myObj);