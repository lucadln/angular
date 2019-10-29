const fullNameMaxLength = 10;

class Employee {
	private _fullName: string;

	getFullName(): string {
		return this._fullName;
	}

	setFullName(newName: string) {
		if (newName && newName.length > fullNameMaxLength) {
			throw new Error("fullName has a max length of " + fullNameMaxLength);
		}

		this._fullName = newName;
	}
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
	console.log(employee.fullName);
}