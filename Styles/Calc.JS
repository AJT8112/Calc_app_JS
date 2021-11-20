function calculator(num1, num2, operator){
    let sum;
    switch(operator){
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '*':
            sum = num1 * num2;
            break;
        case '/':
            sum = num1 / num2;
            break;
        case '%':
            sum = num1 % num2;
            break;
        default:
            console.log("Operator Is Not Recognised");
            return;
    }
    return sum;
}
let sum1 = calculator(10,2,'+');
let sum2 = calculator(10,2,'/');
let sum3 = calculator(10,2,'*');
let sum4 = calculator(10,2,'-');
let sum5 = calculator(2,10,'%');
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);