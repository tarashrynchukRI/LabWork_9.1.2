// Використовуємо перелік для представлення спеціальностей
var Specialty;
(function (Specialty) {
    Specialty[Specialty["ComputerScience"] = 0] = "ComputerScience";
    Specialty[Specialty["Informatics"] = 1] = "Informatics";
    Specialty[Specialty["MathematicsAndEconomics"] = 2] = "MathematicsAndEconomics";
    Specialty[Specialty["PhysicsAndInformatics"] = 3] = "PhysicsAndInformatics";
    Specialty[Specialty["LaborEducation"] = 4] = "LaborEducation";
})(Specialty || (Specialty = {}));
// Використовуємо перелік для представлення третього предмету
var ThirdSubject;
(function (ThirdSubject) {
    ThirdSubject[ThirdSubject["Programming"] = 0] = "Programming";
    ThirdSubject[ThirdSubject["NumericalMethods"] = 1] = "NumericalMethods";
    ThirdSubject[ThirdSubject["Pedagogy"] = 2] = "Pedagogy";
})(ThirdSubject || (ThirdSubject = {}));
// Функція для генерації випадкового числа в заданому діапазоні
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Функція для створення масиву студентів
function createStudents(numStudents) {
    var students = [];
    var surnames = ["Іванов", "Петров", "Сидоров", "Козлов", "Смірнов"];
    var specialties = Object.values(Specialty).filter(function (value) { return typeof value === "number"; });
    for (var i = 0; i < numStudents; i++) {
        var specialty = specialties[getRandomInt(0, specialties.length - 1)];
        var thirdSubject = void 0;
        // В залежності від спеціальності вибираємо відповідний третій предмет
        switch (specialty) {
            case Specialty.ComputerScience:
                thirdSubject = { subject: ThirdSubject.Programming, grade: getRandomInt(3, 5) };
                break;
            case Specialty.Informatics:
                thirdSubject = { subject: ThirdSubject.NumericalMethods, grade: getRandomInt(3, 5) };
                break;
            default:
                thirdSubject = { subject: ThirdSubject.Pedagogy, grade: getRandomInt(3, 5) };
        }
        var student = {
            surname: surnames[getRandomInt(0, surnames.length - 1)],
            course: getRandomInt(1, 4),
            specialty: specialty,
            physics: getRandomInt(3, 5),
            math: getRandomInt(3, 5),
            thirdSubject: thirdSubject,
        };
        students.push(student);
    }
    return students;
}
// Функція для перевірки, чи є оцінка відмінною
function isExcellentGrade(grade) {
    return grade.grade === 5;
}
// Функція для обчислення кількості студентів, які вчаться на "відмінно"
function calculateExcellentStudents(students) {
    return students.filter(function (student) { return student.physics === 5 && student.math === 5 && isExcellentGrade(student.thirdSubject); }).length;
}
// Функція для обчислення відсотка студентів, які отримали з фізики оцінку "5"
function calculatePhysicsGradePercentage(students, grade) {
    var studentsWithGrade = students.filter(function (student) { return student.physics === grade; }).length;
    return (studentsWithGrade / students.length) * 100;
}
// Функція для виведення студентів
function displayStudents(students) {
    console.log("№\tПрізвище\t\tКурс\tСпеціальність\t\t\t\tФізика\tМатематика\tПрограмування\tЧисельні методи\tПедагогіка");
    students.forEach(function (student, index) {
        console.log("".concat(index + 1, "\t").concat(student.surname.padEnd(15, " "), "\t").concat(String(student.course).padEnd(5, " "), "\t").concat(Specialty[student.specialty].padEnd(25, " "), "\t").concat(String(student.physics).padEnd(8, " "), "\t").concat(String(student.math).padEnd(10, " "), "\t").concat(student.specialty === Specialty.ComputerScience ? String(student.thirdSubject.grade).padEnd(10, " ") : "\t".padEnd(10, " "), "\t").concat(student.specialty === Specialty.Informatics ? String(student.thirdSubject.grade).padEnd(10, " ") : "\t".padEnd(10, " "), "\t").concat(student.specialty !== Specialty.ComputerScience && student.specialty !== Specialty.Informatics ? String(student.thirdSubject.grade).padEnd(10, " ") : "\t".padEnd(10, " ")));
    });
}
var numberOfStudents = Number(prompt("Number of students: "));
var students = createStudents(numberOfStudents);
var excellentStudents = calculateExcellentStudents(students);
var physicsGradePercentage = calculatePhysicsGradePercentage(students, 5);
console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0456\u0432, \u044F\u043A\u0456 \u0432\u0447\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \"\u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E\": ".concat(excellentStudents));
console.log("\u0412\u0456\u0434\u0441\u043E\u0442\u043E\u043A \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0456\u0432, \u044F\u043A\u0456 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 \u0437 \u0444\u0456\u0437\u0438\u043A\u0438 \u043E\u0446\u0456\u043D\u043A\u0443 \"5\": ".concat(physicsGradePercentage.toFixed(2), "%"));
displayStudents(students);
