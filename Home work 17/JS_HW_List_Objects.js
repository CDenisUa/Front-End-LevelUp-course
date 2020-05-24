/* Задача 1: Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.*/

/*
let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud";

let arr = str.split(" ").reverse().join(" ");
console.log(arr); - основное решение


let arr = str.split(" ");
let arrReverse = [];

for (item of arr) {
    let reverse = item.split("").reverse().join("");
    arrReverse.push(reverse);
}
console.log(arrReverse.join(" ")); - дополнительное решение реверс каждого слова нашей строки
*/


/* Задача 2: Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.*/
//   index   0     1      2    3     4  
/*let arr = [1, "Hello", 68, true, undefined];
let arrCopy = [];

function copyArr(a) {
    for (item of a) {
        arrCopy.push(item);
    }
    return arrCopy;
}

let b = copyArr(arr);

console.log(arr + ' - это наш старый массив ' + "\n" + b + ' - это наш новый массив');*/

/* Задача 3: Преобразуйте строку:
    'я_люблю_javascript' в 'Я Люблю Учить Javascript".
    Написать код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов додчеркивания).*/
/*
let str = 'я_люблю_javascript';

let arr = str.split("_");
let upper = [];

for (item of arr) {
    upper.push(item[0].toUpperCase() + item.slice(1));
}

let convertStr = upper.join(' ');
console.log(convertStr);
*/


/*Задача 4:
Удалить повторяющиеся элементы массива
let arr = ['i', 'love', 'Javascript', 'love', 'i', 'javascript']

let arr = ['i', 'love', 'Javascript', 'love', 'i', 'javascript'];
let newArr = [];

arr.forEach(function (item, index) {
    for (let i = index + 1; i < arr.length; i++) {
        if (item == arr[i]) {
            delete arr[i];
        }
    }
})

for (a of arr) {
    if (a == undefined) {
        continue;
    }
    newArr.push(a);
}
console.log(newArr)*/


/*Задача 5:
Напишите функцию sortNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.

let arr = [5, 2, 1, -10, 8, 2132131, 22, 2, 1, 23, 42, 3, 123125124,];
let sortArr = arr.sort(function (a, b) {
    return b - a;
})
console.log(sortArr);*/


/*Задача 6: Сумма элементов двух массивов
let arrOne = [24, 2, 67, 5, 3, 443, 4], arrTwo = [23, 4, 5, 77, 3, 22];

function sumArray(arrA, arrB) {
    let sumArray = [], arrLen = 0;
    if (arrA.length > arrB.length) {
        arrLen = arrA.length;
    }
    else if (arrB.length > arrA.length) {
        arrLen = arrB.length;
    }
    else {
        arrLen = arrA.length;
    }

    for (let i = 0; i < arrLen; i++) {
        if (arrA[i] == undefined) {
            arrA[i] = 0;
            sumArray[i] = arrA[i] + arrB[i];
        }
        else if (arrB[i] == undefined) {
            arrB[i] = 0;
            sumArray[i] = arrA[i] + arrB[i];
        }
        else {
            sumArray[i] = arrA[i] + arrB[i];
        }
    }
    return sumArray;
}
console.log(sumArray(arrOne, arrTwo));*/


/*Задача 7:
дан массив, найти сумму через for of
let arr = [1,2,3,4,5,6,7]лементов массива
+++ а так же написать через for  пояснить, какой цикл легче и почему на ваш взгляд!

let arr = [1, 2, 3, 4, 5, 6, 7], ArrItemSum = 0;
for (let iterator of arr) {
    ArrItemSum += iterator;
}
console.log(ArrItemSum);*/


/*Задача 8: for of
Пусть у вас есть массив с названиями месяцев. С помощью цикла выведите на экран все месяцы из массива. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.


let monthAll = ['январь', 'февраль', 'март', 'апрель', 'май', 'июль', 'июнь', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'], month;

for (let iterator of monthAll) {
    console.log(iterator);
}

for (let i = 0; i < monthAll.length; i++) {
    console.log(monthAll[i]);
}*/

/*
Дополнительная задача
Перепишите, уберите цикл, используйте вместо него метод .map().
let arr = ["Не", "макбук", "делает", "из", "тебя", "мастера"];

let arrLength = [];
for (let i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}

console.log(arrLength); // [2, 6, 6, 2, 4, 7]*/
// let arr = ["Не", "макбук", "делает", "из", "тебя", "мастера"];


//Делаем через ForEach()
/*
let newArr = arr.forEach(function (element) {
    newArray.push(element.length);
})
console.log(newArray);
*/

//Делаем через Map
/*
let newArray = arr.map(function (e) {
    return e.length;
})
console.log(newArray);

newArray = arr.map(e => e.length);
console.log(newArray);
*/