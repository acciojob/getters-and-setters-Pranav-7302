class Person {
    constructor(name, age) {
        this._name = name;  // ✅ Fix: `_name` set kar diya
        this._age = age;
    }

    get name() {  
        return this._name;
    }

    set age(age) {  
        this._age = age;
    }

    get age() {  
        return this._age;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
    }
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
console.log(person.name); // ✅ Output: John

person.age = 30;  
console.log(person.age); // ✅ Output: 30

const student = new Student("Alice", 22);
student.study();  // ✅ Output: "Alice is studying"

const teacher = new Teacher("Bob", 50);
teacher.teach();  // ✅ Output: "Bob is teaching"
