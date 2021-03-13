const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
const tania = students[0];
const victor = students[1];
const anton = students[2];

function getSubjects(student) {
    return Object.keys(student.subjects).map((subject) => (subject[0].toUpperCase() + subject.slice(1)).replaceAll('_', ' '))
}
console.log(`Список предметів для ${tania.name}`);
console.log(getSubjects(tania));
console.log(`Список предметів для ${victor.name}`);
console.log(getSubjects(victor));
console.log(`Список предметів для ${anton.name}`);
console.log(getSubjects(anton));



function getAverageMark(student) {
    return +(Object.values(student.subjects).reduce((acc, val) => acc.concat(...val), []).reduce((acc, val, i) => (acc * i + val) / (i + 1), 0)).toFixed(2);
}
console.log(`Середня оцінка студентки ${tania.name}`);
console.log(getAverageMark(tania));
console.log(`Середня оцінка студента ${victor.name}`);
console.log(getAverageMark(victor));
console.log(`Середня оцінка студента ${anton.name}`);
console.log(getAverageMark(anton));

function getStudentInfo(student) {
    return {
        cousre: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    }

}
console.log(`Загальна інформація про ${tania.name}`);
console.log(getStudentInfo(tania));
console.log(`Загальна інформація про ${victor.name}`);
console.log(getStudentInfo(victor));
console.log(`Загальна інформація про ${anton.name}`);
console.log(getStudentInfo(anton));

function getStudentsNames(students) {
    return students.map(item => item.name).sort()

}
console.log('Упорядкований список студентів');
console.log(getStudentsNames(students));

function getBestStudent(students) {
    let top = students.map(item => getStudentInfo(item)).sort((a, b) => a.averageMark < b.averageMark ? 1 : -1);
    return top[0].name
}
console.log('Кращий студент');
console.log(getBestStudent(students));

function calculateWordLetters(str) {
    str = str.split("")
    let obj = str.reduce((acc, val) => {
        acc[val] = 0
        return acc
    }, {})
    for (let caunter in obj) {
        str.forEach(element => {
            if (caunter == element) obj[caunter]++
        });
    }
    return obj;
}
console.log('Підрахунок літер в рядку');
console.log(calculateWordLetters("тест"));