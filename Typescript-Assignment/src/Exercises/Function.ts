//Bài 1
function sum(a: number, b: number = 10): number {
  return a + b;
}

//Bài 2
function mergeStrings(...args: string[]): string {
  return args.join('');
}

//Bài 3
function getValue(x: string): string;
function getValue(x: number): number;
function getValue(x: any): any {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  if (typeof x === 'number') {
    return x * 2;
  }
}

//Bài 4
function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
  return arr.filter(condition);
}