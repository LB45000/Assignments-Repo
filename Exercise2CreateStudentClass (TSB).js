class Student {
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }
}

const studentInstance = new Student('John Doe', 20, 'Computer Science');
console.log(studentInstance);
