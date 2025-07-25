// Bài 1
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(this.name);
    }
}

// Bài 2
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    speak(): void {
        console.log("Meow");
    }
}

// Bài 3
abstract class Shape {
    abstract area(): number;
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Bài 4
class Person {
    private _age: number = 0;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value > 0 && value < 120) {
            this._age = value;
        } else {
            throw new Error("Age must be between 1 and 119");
        }
    }
}