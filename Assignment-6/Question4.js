// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.


class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    displayFullName(){
        return `${this.firstname +" "+ this.lastname}`;
    }

    static averageAge(array){
        let initval=0;
        const total = array.reduce((accumulator, obj)=>accumulator + obj.age ,initval);
        return Math.floor(total/array.length);
    }
}

const obj1 = new Person("Yash", "Bhardwaj", 21);
const obj2 = new Person("Shreya","Sharma",22);
const obj3= new Person("Prasuk","Jain",21);

const fullname = obj1.displayFullName();
console.log(fullname);

const average = Person.averageAge([obj1,obj2,obj3]);
console.log(average);





