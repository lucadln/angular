	class Student {
	fullName: string;
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + " M. " + person.lastName;
}

let user = {firstName: "Lucian", lastName: "Ardelean"};

document.body.textContent = greeter(user);