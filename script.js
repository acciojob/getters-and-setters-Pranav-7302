class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get Name() {
        return this.name;
    }

    set Age(age) {
        this.age = age;  // ✅ Fix: _age hata diya
    }

    get Age() {
        return this.age;  // ✅ Fix: _age hata diya
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);  // ✅ Fix: Console log add kiya
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);  // ✅ Fix: Console log add kiya
    }
}

// ✅ Cypress ke liye ensure karo ki classes accessible hain
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// ✅ Test ke liye instance create karo
const person = new Person("John", 25);
console.log(person.Name); // Output: John

person.Age = 30;
console.log(person.Age); // Output: 30

const student = new Student("Alice", 22);
student.study();  // ✅ Output: "Alice is studying"

const teacher = new Teacher("Bob", 50);
teacher.teach();  // ✅ Output: "Bob is teaching"
