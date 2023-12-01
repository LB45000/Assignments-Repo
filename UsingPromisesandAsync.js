function addStudentToClass(student) {
  return new Promise((resolve, reject) => {
    const randomDelay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000; 
    setTimeout(() => {
      if (student.age < 18) {
        reject(new Error("Student is too young for this class."));
      } else {
        resolve("Student added to the class.");
      }
    }, randomDelay);
  });
}

async function registerStudent(student) {
  try {
    const message = await addStudentToClass(student);
    console.log(message);
  } catch (error) {
    console.error(error.message);
  }
}

const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];

for (const student of students) {
  registerStudent(student);
}
