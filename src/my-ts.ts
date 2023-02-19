export {};

//boolean
let isReady: boolean = true;

//number
let decimal: number = 10;
let hex: number = 0xd0ff00;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

//string
let name: string = "Bob";

//object
const user: object = { name: "Bob", lastName: "Yare" };

//array
const numbers: number[] = [1, 2, 3];
const names: string[] = ["Bob", "Tom", "Ted"];
const data: object[] = [
  { name: "Bob", lastName: "Yare" },
  { name: "Tom", lastName: "Yare" },
];

//typle
let store: [string, number];
store = ["apple", 10];

//enum
enum Role {
  Admin = 1,
  SuperAdmin = 2,
  User = 3,
}

//function
function info(name: string, age: number): string {
  return `Your name is ${name}. You are ${age} years old`;
}

function fullName(name: string, age: number): void {
  console.log(`Your name is ${name}. You are ${age} years old`);
}

//union type
function yourId(id: number | string) {
  console.log(id);
}

//interface
interface User {
  name: string;
  lastName: string;
  isMarried: boolean;
  spouseName?: string;
}

//generic
function identity<Type>(arg: Type): Type {
  return arg;
}
