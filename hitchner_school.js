
function School() {
  this.student = [];
  this.teacher = [];
}
// School Method : How many Students/Teachers in School
School.prototype.schoolPop = function(person) {
  if( person.age > 18) {
    this.teacher.push(person);
  } else if (person.age < 18) {
    this.student.push(person);
  }
}

function Person( age, height, gender) {
  this.age = age;
  this.height = height;
  this.gender = gender;
};

function Student(age, height, gender, grade) {
  // Inheriting properties from Person Constructor
  Person.call(this, age, height, gender);
  this.grade = grade;
};
// Student Method : Test Report
Student.prototype.testGrade = function (student) {
  if(this.grade > 90 ){
    console.log(student +"'s Grade is A.");
  }
  else if(this.grade > 80 && this.grade < 90){
    console.log(student +"'s Grade is B.");
  }
  else if(this.grade > 70 && this.grade < 80){
    console.log( student +"'s Grade is C.");
  }
  else{
    console.log(student +"'s Grade needs improvement.")
  }
};

function Teacher ( age, height, gender, course) {
  Person.call(this, age, height, gender);
  this.course = course;
};
// Teacher method: What do they teach?
Teacher.prototype.subject = function (teacher) {
    console.log(teacher + " teaches " + this.course".")
};

// Instantiated School
var tinySchool = new School();
// Instantiated Student
var jeremy = new Student ( 12, "4ft", "male", 46);
var sam = new Student (12, "3ft 5in", "female", 97);
var jenny = new Student(11, "4ft", "female", 77);
// Instantiated Teacher
var mrRogers = new Teacher (45, "6ft", "male", "history");
var msLamb = new Teacher (49, "5ft", "female","math")
 // Pushing students and teachers to array
tinySchool.schoolPop(mrRogers);
tinySchool.schoolPop(msLamb);
tinySchool.schoolPop(jeremy);
tinySchool.schoolPop(sam);
tinySchool.schoolPop(jenny);
// Confirming that each array is filled with correct number of items
console.log(tinySchool.student.length);
console.log(tinySchool.teacher.length);
// Displaying gade letter for each student
jeremy.testGrade("Jeremy");
jenny.testGrade("Jenny");
sam.testGrade("Sam");
//Declaring what course the teacher teaches
msLamb.subject("Ms. Lamb");
mrRogers.subject("Mr. Rogers");
