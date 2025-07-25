//Bài 1
let age: number = 25;
let isActive: boolean = true;
let data: any = { x: 10 };
data = "hello";

// Bài 2
let user: {
  name: string;
  age?: number;
  roles: [string, number];
} = {
  name: "Alice",
  roles: ["admin", 1]
};

//Bài 3
const input = document.getElementById("input") as HTMLInputElement;
const value: number = parseFloat(input.value);

//Bài 4
let valueAny: any = "hello";
let valueUnknown: unknown = "hello";

console.log(valueAny.toUpperCase());

if (typeof valueUnknown === "string") {
  console.log(valueUnknown.toUpperCase());
}
