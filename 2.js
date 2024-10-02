
const num1 = parseFloat(prompt("Введите первое число:"));
const num2 = parseFloat(prompt("Введите второе число:"));

if (num1 > num2) {
    console.log("Наибольшее число: " + num1);
} else if (num2 > num1) {
    console.log("Наибольшее число: " + num2);
} else {
    console.log("Числа равны.");
}
