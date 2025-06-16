var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};

// var getPersonDetails = person.getDetails;
// getPersonDetails();

// Method 1
// person.getDetails();

// Method 2
var getPersonDetails = person.getDetails.bind(person);
getPersonDetails();
