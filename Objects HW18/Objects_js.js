/* Задача 1:
    Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его
ключей.

let obj = { js: 'test', jq: 'hello', css: 'world' };
let arr = [];
for (let key in obj) {
    arr.push(key);
} console.log(arr);*/
/* Задача 2:
    создать функцию,создать группу студентов,
разделить студентов на группы
создать возможность добавлять новых студентов
а именно новая группа, новый студент

let school = {
    'group_1': ['shevchenko', 'mishin'],
    'group_2': ['loboda', 'gerasim'],
    'group_3': ['franko', 'ukrainka'],
}
function addStudent(student = "name", group = "group") {
    school[group] = student;
    return school;
}
console.log(addStudent());*/

/* Задача 3:
Создайте калькулятор- его задача:
запрашивает 2 числа()
записывает в объект
числа получаем от пользователя(prompt)
и через метод выводим его результат
складывает
делит
умножает


let value = prompt("Введите выражение в формате (a + b) математические действия которые можно выполнять ( + - * /)", "Введите выражение");//"25 + 24"
console.log(calc(value)); //endValue = 49
function calc(str) {
    let arr = str.split(" "); // ["первое число", "знак действия", "второ число"] ["25","+","24"]
    let firstNumber = arr[0], secondNumber = arr[2], literal = arr[1], endValue; // firstNumber = "25",secondNumber = "24",literal = "+"
    let obj = {
        firstNumber: secondNumber,
        literal
    }
    switch (literal) {
        case ("+"):
            endValue = +firstNumber + +secondNumber;
            break
        case ("-"):
            endValue = +firstNumber - +secondNumber;
            break
        case ("/"):
            endValue = +firstNumber / +secondNumber;
            break
        case ("*"):
            endValue = +firstNumber * +secondNumber;
            break
    }

    return endValue;
}
*/

/* Задача 4:
Добавить возможность запрашивать у пользователя, про группы новая группа или нет,если да, имя группы и ее номер, если нет (для положительного или отрицательного ответа использовать метод confirm()) выбрать какая группа и дать возможность ввести ее пользователю.

let school = {
    'group_1': ['shevchenko', 'mishin'],
    'group_2': ['loboda', 'gerasim'],
    'group_3': ['franko', 'ukrainka'],
}
let strGroup = Object.keys(school).join(", ");
let question = confirm("Вы хотите добавить новую группу?");
if (question == true) {
    let groupName = prompt("Введите имя группы");
    let groupNumber = prompt("Введите номер группы");
    school[groupName] = groupNumber;
}
else {
    let change = prompt("Введите группу из списка: " + strGroup);
}
console.log(school);*/

/* Задача 5:
Cоздать шаблоны, в объектах, которые будут добавлять номер группы автоматически группа - студент group$ - student$

let school = {}, id = 0;

function addStudent(student) {
    id++;// 1
    let group = "group_" + id;
    school[group] = student;
}
addStudent("Olya");
addStudent("Olya");
addStudent("Olya");
addStudent("Olya");
addStudent("Olya");
addStudent("Denis");
console.log(school);*/

/* Home work 5
Создайте функцию rangeFilter(arr, a, b), которая принимает три аргумента.
arr - массив с числами
a -  начало диапазона
b - конец диапазона

Функция должна создавать новый массив из переданного ей массива arr и в этот новый массив помещать числа в диапазоне от a до b из переданного arr и упорядочить числа по возрастанию.
let arr = [45, 2, 55, 67, 1, 6, 4, 5];

function rangeFilter(arr, a, b) {
    let newArr = [];
    for (let iterator of arr) {
        if (iterator >= a && iterator <= b) {
            newArr.push(iterator);
        }
    }
    let result = newArr.sort(function (a, b) {
        return a - b;
    });
    return result;
}

console.log(rangeFilter(arr, 0, 50));*/