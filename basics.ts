// example of object being defined trough typescript
let user: {
  name: string;
  age: number;
  isValid: boolean;
};

user = {
  name: "max",
  age: 12,
  isValid: true,
};

//variable with a type of string
let random: string;

// array of strings
let hoobies: string[];

//array of numbers
let cars: number[];

// ":" is presenting type of the return value, if it's ":void" our function can't return value
function add(a: number, b: number) {
  return a + b;
}

// Defining function as a parameter, since function can be treated as a value, inside of a function
function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  calcFn(a, b);
}

calculate(2, 5, add);

// "type" special typescript keyword is allowing us to create custom types / asigning aliases to some other types

// 1. function example
type AddFn = (a: number, b: number) => number;

function newCalculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

newCalculate(2, 5, add);

// 2. primitive value example
type StringOrNum = string | number;

let names: StringOrNum;
names = "Nenad";

// 3. object example
type ObjectExample = {
  name: string;
  age: number;
  valid: boolean;
};

let randomObj: ObjectExample;

randomObj = {
  name: "Nenad",
  age: 28,
  valid: true,
};

// Creating objects with interface method - commonly used for creating object types when working with classes or creating libraries
interface Credentials {
  username: string;
  password: number;
}

let cred: Credentials;

cred = {
  username: "Nenad",
  password: 18,
};

// Merging different types with "&"

type Admin = {
  permisions: string[];
};

type AppUser = {
  username: string;
};
type AdminAppUser = Admin & AppUser;

let adminAppUser: AdminAppUser;

adminAppUser = {
  permisions: ["abraka", "dabra"],
  username: "Nenad",
};

// Literal types - role can only be asigned as these 3 string values

let role: "admin" | "user" | "editor";

// Using generic types

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

let textStorage: DataStorage<string>;

textStorage = {
  storage: [],
  add: (data) => {},
};
