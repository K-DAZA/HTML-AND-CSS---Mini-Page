//Algritmo para hacer la serie de fibonassi

let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
let i = 2;
for (i; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);