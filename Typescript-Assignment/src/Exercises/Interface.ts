// Bài 1:
interface Car {
    readonly brand: string;
    speed: number;
    start(): void;
}

// Bài 2:
type Person = { name: string };
type Employee = Person & { employeeId: number };

// Bài 3:
type Dictionary = {
    [key: string]: any;
};

// Bài 4:
type OptionalFields<T> = {
    [K in keyof T]?: T[K];
};