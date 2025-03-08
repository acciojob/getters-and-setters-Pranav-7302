class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;  // ✅ Fix: `_age` use kiya
    }

    get Name() {
        return this.name;
    }

    set age(age) {  // ✅ Fix: "age" ko lowercase banaya
        this._age = age;
    }

    get age() {  // ✅ Fix: getter bhi "age" lowercase se kiya
        return this._age;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// ✅ Cypress ke liye ensure karo ki classes accessible hain
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// ✅ Test ke liye instance create karo
const person = new Person("John", 25);
console.log(person.Name); // Output: John

person.age = 30;  // ✅ Fix: "Age" ko "age" banaya
console.log(person.age); // Output: 30 ✅

const student = new Student("Alice", 22);
student.study();  // ✅ Output: "Alice is studying"

const teacher = new Teacher("Bob", 50);
teacher.teach();  // ✅ Output: "Bob is teaching"
