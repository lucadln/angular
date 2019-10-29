interface Point {
	readonly x: number;
	readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error

// ready only arrays
let a: number[] = [1, 2, 3, 4];
let ro: ReadOnlyArray<number> = a;
ro[0] = 12; // error
// etc