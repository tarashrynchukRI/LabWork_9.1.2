function calculateExcellentStudents(students) {
   return students.filter(function (student) { return student.physics === 5 && student.math === 5 && student.informatics === 5; }).length;
}

module.exports = calculateExcellentStudents;
