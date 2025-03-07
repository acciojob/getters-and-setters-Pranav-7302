//complete this code
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get Name(){
        return this.name;
    }
    set Age(age){
        this._age = age;
    }
    get Age(){
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

// Do not change the code below this line
// window.Person = Person;
// window.Student = Student;
// window.Teacher = Teacher;
let s1 = new Student("Pranav", 20);
s1.age = 21;
console.log(s1.age);
s1.study();