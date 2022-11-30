// @ts-ignore
function fibonacci(num : number) {
        if(num < 1) return 1;
        return fibonacci(num -1) + fibonacci(num -2);
}

let newArray: Array<number> = [];
for (let i = 2; i < 10; i++) {
    newArray.push(fibonacci(i));
}
console.log(newArray)
