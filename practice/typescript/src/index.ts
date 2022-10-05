let sales: number = 123_456_789;
let course: string = 'Typescript';
let is_published: boolean = true;
let level;

function render(document: any) {
	console.log(document)
}

let numbers: number[] = [];

// 1, 'Mosh'
let user: [number, string, boolean, number] = [1, 'Mosh', true, 0];
user.push(1);

const small = 1;
const medium = 2;
const large = 3;

enum Size {Small = 's', Medium = 'm', Large = 'l'};
let mySize = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
	if (taxYear < 2022)
		return income * 1.2;
	return income * 1.3;
}

console.log(calculateTax(10_000, 2022));

let employee: {
	readonly id: number,
	name: string,
	retire: (date: Date) => void
} = {
	id: 1,
	name: 'Mosh',
	retire: (date: Date) => {
		console.log(date);
	}
};

employee.name = 'Mosh';