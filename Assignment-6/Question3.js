// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    return `This Person name is :${this.name} and age: ${this.age} and is ${this.gender} with Interest in ${this.interests}`;
  }

  farewell() {
    return `goodbye ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, gender, interests, studies) {
    super(name, age, gender, interests);
    this.studies = studies;
  }

  greeting() {
    return `${super.greeting()} and studies ${this.studies}`;
  }
}

class Teacher extends Person {
  constructor(name, age, gender, interests, subjectTaught) {
    super(name, age, gender, interests);
    this.subjectTaught = subjectTaught;
  }

  farewell() {
    return `${super.farewell()} and Teaches ${this.subjectTaught}`;
  }
}

let person = new Person("yash", 22, "male", "chess");
console.log(person.greeting());

let st = new Student("yash", 22, "male", "chess", "maths");
console.log(st.greeting());

let teacher = new Teacher("yash", 22, "male", "chess", "maths");
console.log(teacher.farewell());
