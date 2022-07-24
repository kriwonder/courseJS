//part1

// ======= MAP ======= 
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map(x => x * 2);
// console.log(array1);
// console.log(map1);

Array.prototype.customMap = function (callbackFn, thisArg) {
    let newArr = [];
    for(let i = 0; i < this.length; ++i) {
        let element = this[i];
        let index = i;
        let array = this;

        newArr[i] = callbackFn(element, index, array);
    }

    return newArr;
}

const array2 = [1, 4, 9, 16];
const map2 = array2.customMap(x => x * 2);
console.log(array2);
console.log(map2);

// ======= Reduce =======
// const array1 = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue, index, array) => {
//     // console.log(previousValue, currentValue, index, array);
//     return previousValue + currentValue
//   },
//   initialValue
// );
// console.log(sumWithInitial);

Array.prototype.customReduce = function(callbackFn, initialValue = false) {
    let previousValue,
        i;

    if (initialValue !== false) {
        previousValue = initialValue;
        i = 0;
    } else {
        previousValue = this[0];
        i = 1;
    }
    
    for(; i < this.length; ++i) {
        previousValue = callbackFn(previousValue, this[i], i, this);
    }

    return previousValue;
}
const sumWithInitial2 = array1.customReduce(
  (previousValue, currentValue, index, array) => {
    // console.log(previousValue, currentValue, index, array);
    return previousValue + currentValue
  },
  initialValue
);
console.log(sumWithInitial2);


// ======= FILTER =======
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

Array.prototype.customFilter = function(callbackFn, thisArg) {
    let newArr = [];

    for(let i = 0; i < this.length; ++i) {
        const result = callbackFn.bind(thisArg)(this[i], i, this)
        
        if (result) {
            newArr.push(this[i]);
        }
    }

    return newArr;
}

const result2 = words.customFilter(word => word.length > 6);
console.log(result2);

// ======= FOREACH =======
// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));

Array.prototype.customForEach = function(callbackFn, thisArg) {
    let resultForEach;
    for(let i = 0; i < this.length; ++i) {
        resultForEach = callbackFn.bind(thisArg)(this[i], i, this)
    }
}
array1.customForEach(element => console.log(element));




// function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; ++i) {
//         result = result * i;
//     }
//     return result;
// }
// console.log(factorial(5));
// function factorialAlt(num) {
//     let [, ...range] = [...Array(num).keys()];
//     return range.reduce((prev, current) => prev * current);
// }
// console.log(factorialAlt(5));
// range(1, 5) => [1, 2, 3, 4, 5]


//Part 2

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

//task1: Создать строку из названий предметов написаных через запятую
//task2: Посчитать общее количeство студентов и учителей на всех предметах
//task3: Получить среднее количество студентов на всех пердметах
//task4: Создать массив из объектов предметов
//task5: Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

array1.customForEach(element => console.log(element));

let arrayOfSubjects = Object.entries(subjects);

let lessonStr = ''
let sumStudents = 0;
let sumTeachers = 0;
let studentsObj = [];
let sortOfSubjects = [];

arrayOfSubjects.customForEach(([key, value]) => {
    lessonStr +=  key.toString()+','
    sumStudents += value.students;
    sumTeachers += value.teachers;
    sumOfAll = sumStudents + sumTeachers;
    studentsObj = Array.from(arrayOfSubjects);
    studentsAverage = sumStudents / studentsObj.length;
    sortOfSubjects.push(value);
    sortOfSubjects.sort((x, y) => y.teachers - x.teachers)
});

console.log(lessonStr)
console.log(sumOfAll)
console.log(studentsAverage)
console.log(studentsObj)
console.log(sortOfSubjects)


