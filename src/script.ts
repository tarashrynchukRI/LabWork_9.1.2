// Створюємо інтерфейс для студента
interface Student {
   surname: string;
   course: number;
   specialty: Specialty;
   physics: number;
   math: number;
   thirdSubject: ThirdSubjectGrade;
}

// Використовуємо перелік для представлення спеціальностей
enum Specialty {
   ComputerScience,
   Informatics,
   MathematicsAndEconomics,
   PhysicsAndInformatics,
   LaborEducation,
}

// Використовуємо перелік для представлення третього предмету
enum ThirdSubject {
   Programming,
   NumericalMethods,
   Pedagogy,
}

// Створюємо інтерфейс для оцінки з третього предмету
interface ThirdSubjectGrade {
   subject: ThirdSubject;
   grade: number;
}

// Функція для генерації випадкового числа в заданому діапазоні
function getRandomInt(min: number, max: number): number {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функція для створення масиву студентів
function createStudents(numStudents: number): Student[] {
   const students: Student[] = [];
   const surnames = ["Іванов", "Петров", "Сидоров", "Козлов", "Смірнов"];
   const specialties = Object.values(Specialty).filter((value) => typeof value === "number") as Specialty[];

   for (let i = 0; i < numStudents; i++) {
      const specialty = specialties[getRandomInt(0, specialties.length - 1)];
      let thirdSubject: ThirdSubjectGrade;

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

      const student: Student = {
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
function isExcellentGrade(grade: ThirdSubjectGrade): boolean {
   return grade.grade === 5;
}

// Функція для обчислення кількості студентів, які вчаться на "відмінно"
function calculateExcellentStudents(students: Student[]): number {
   return students.filter((student) => student.physics === 5 && student.math === 5 && isExcellentGrade(student.thirdSubject)).length;
}

// Функція для обчислення відсотка студентів, які отримали з фізики оцінку "5"
function calculatePhysicsGradePercentage(students: Student[], grade: number): number {
   const studentsWithGrade = students.filter((student) => student.physics === grade).length;
   return (studentsWithGrade / students.length) * 100;
}

// Функція для виведення студентів
function displayStudents(students: Student[]): void {
   console.log("№\tПрізвище\t\tКурс\tСпеціальність\t\t\t\tФізика\tМатематика\tПрограмування\tЧисельні методи\tПедагогіка");
   students.forEach((student, index) => {
      console.log(
         `${index + 1}\t${student.surname.padEnd(15, " ")}\t${String(student.course).padEnd(5, " ")}\t${Specialty[student.specialty].padEnd(25," ")}\t${String(student.physics).padEnd(8, " ")}\t${String(student.math).padEnd(10, " ")}\t${student.specialty === Specialty.ComputerScience ? String(student.thirdSubject.grade).padEnd(10, " ") : "\t".padEnd(10, " ")}\t${student.specialty === Specialty.Informatics ? String(student.thirdSubject.grade).padEnd(10, " ") : "\t".padEnd(10, " ")}\t${student.specialty !== Specialty.ComputerScience && student.specialty !== Specialty.Informatics ? String(student.thirdSubject.grade).padEnd(10, " "): "\t".padEnd(10, " ")}`);
   });
}

const numberOfStudents = Number(prompt("Number of students: "));
const students = createStudents(numberOfStudents);
const excellentStudents = calculateExcellentStudents(students);
const physicsGradePercentage = calculatePhysicsGradePercentage(students, 5);

console.log(`Кількість студентів, які вчаться на "відмінно": ${excellentStudents}`);
console.log(`Відсоток студентів, які отримали з фізики оцінку "5": ${physicsGradePercentage.toFixed(2)}%`);

displayStudents(students);
