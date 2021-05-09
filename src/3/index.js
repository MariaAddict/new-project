//Задача 3
//Найти самую длинную общую последовательность 2х строк
const FindALongCommonSequence = (a, b) => {
    let maxCount = 0;
    let commonSequence = '';
    let substringIndex = 0; 
    for (let i = 0; i <= a.length; i++) {
        if (b.includes(a.slice(substringIndex, i))) {
            if (maxCount < i - substringIndex) {
                commonSequence = '';
                maxCount = i - substringIndex;
                commonSequence = a.slice(substringIndex, i);
            }
        } else {
            substringIndex ++;
        }
    }
    return commonSequence;
}


const a = "aababba";
const b = "abbaabcd";
console.log("Найти самую длинную общую последовательность 2х строк");
console.log("Входные данные: A: ", a, "2. Б: ", b);
console.log("Результат: ", FindALongCommonSequence(a, b));