//Задача 2
//Сделать функцию сдвига элементов массива вправо на N шагов
const ShiftArrayElements = (array, k) => {
    if (array !== null && array !== undefined && k !== undefined) {
        return (array.slice(k - 1).concat(array.slice(0, k - 1)));
    }
}

const array = [1, 2, 3, 4, 5];
const k = 3;
console.log("Сдвинуть массив на N шагов ");
console.log("Входные данные: 1. Массив: ", array, "2. Количество шагов: ", k);
console.log("Результат: ", ShiftArrayElements(array, k));
