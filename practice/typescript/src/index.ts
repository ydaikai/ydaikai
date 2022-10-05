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

// let employee: {
// 	readonly id: number,
// 	name: string,
// 	retire: (date: Date) => void
// } = {
// 	id: 1,
// 	name: 'Mosh',
// 	retire: (date: Date) => {
// 		console.log(date);
// 	}
// };

// employee.name = 'Mosh';

type Employee = {
	readonly id: number,
	name: string,
	retire: (date: Date) => void
}

function kgToLbs(weight: number | string): number {
	//Narrowing
	if (typeof weight === 'number')
		return weight * 2.2;
	else
		return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

type Draggable = {
	drag: () => void
};

type Resizable = {
	resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
	drag: () => {},
	resize: () => {}
};

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: 50 | 100 = 100;

function greet(name: string | null | undefined) {
	if (name)
		console.log(name.toUpperCase());
	else
		console.log('Hola!');
}
greet(null);

type Customer = {
	birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : {birthday: new Date()};
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
// customers?.[0]

//Optional call
let log: any = null;
log?.('a');