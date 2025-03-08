class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get Name() {
        return this.name;
    }

    set Age(age) {
        this.age = age;
    }

    get Age() {
        return this.age;
    }
}

class Student extends Person {
    study() {
        return `${this.name} is studying`;  // ✅ Testing ke liye return kiya
    }
}

class Teacher extends Person {
    teach() {
        return `${this.name} is teaching`;  // ✅ Testing ke liye return kiya
    }
}

// ✅ Ensure Cypress can access these classes
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// ✅ Cypress Testing ke liye Sample Instances
const person = new Person("John", 25);
console.log(person.Name); // Output: John

person.Age = 30;
console.log(person.Age); // Output: 30

const student = new Student("Alice", 22);
console.log(student.study()); // Output: Alice is studying

const teacher = new Teacher("Bob", 50);
console.log(teacher.teach()); // Output: Bob is teaching
