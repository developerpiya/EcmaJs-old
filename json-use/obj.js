const person = {
    name: ['piya', 'siya'],
    age: 22,
    bio: function () {
        console.log(`my name is ${this.name[0]} and my friend is ${this.name[1]} and age is ${this.age}`);
        return false;
    },
    introduction: function () {
        console.log(`name is ${this.name[0]} and my friend is ${this.name[1]}`);
        return false;
    }
};

console.log(person);
person.bio()
person.introduction()

const person1 = {
    name: ["Bob", "Smith"],
    age: 32,
  };
  
  function logProperty(propertyName) {
    console.log(person1[propertyName]);
  }
  
  logProperty("name");
  // ["Bob", "Smith"]
  logProperty("age");
  // 32
