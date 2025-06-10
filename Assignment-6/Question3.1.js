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
    console.log(
      `This Person name is :${this.name} and age: ${this.age} and is ${this.gender} with Interest in ${this.interests}`
    );
  }

  farewell() {
    console.log(`goodbye ${this.name}`);
  }
}

class Student extends Person{
    constructor(studies){
        this.studies= studies;
    }

    greeting(){
        console.log(`Student is Studying ${this.studies}`);
    }
}

class Teacher extends Person{
    constructor(subjectTaught){
        this.subjectTaught = subjectTaught;
    }

    farewell(){
        console.log(`Teacher Teaches ${this.subjectTaught}`);
    }
}

