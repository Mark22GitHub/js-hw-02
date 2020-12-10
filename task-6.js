const numbers = [];
let input;
let total = 0;

while (true) {
    input = prompt('Введите число');

    if (input === null) {
        alert('Отменено пользователем')
        break;
    }

    input = Number(input);

    if (!isNaN(input)) {
      numbers.push(input);
     } else {
         alert("Было введено не число, попробуйте еще раз");
    }
}

 if (numbers.length >= 0) {
    for (let number of numbers) {
    total += number;
    }
    }

console.log(`Общая сумма чисел равна ${total}.`);
