let input = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);

let [myFirst, ...theRest] = [1, 2, 3, 4];

// Destructuring objects
let myObj = {
	a: "foo",
	b: 2,
	c: "bar"
};

let {a, b} = myObj;

// Destructuring functions
type C = { a: string, b?: number }
function f({a, b}: C): void {
	//
}