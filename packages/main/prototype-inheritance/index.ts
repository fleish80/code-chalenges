function Person(firsName: string, lastName: string) {
  // @ts-ignore
  this.firstName = firsName;
  // @ts-ignore
  this.lastName = lastName;

}

Person.prototype.getFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`)
}

function SuperHero(firsName: string, lastName: string) {
  // @ts-ignore
  Person.call(this, firsName, lastName);
  // @ts-ignore
  this.isSuperHero = true;
}

SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.fightCrime = function() {
  console.log('fight');
}

// @ts-ignore
const p1 = new Person('Bruce', 'Wayne');
p1.getFullName();

console.log(p1.firstName);

// @ts-ignore
const superman = new SuperHero('Clark', 'Kent');
superman.getFullName();
superman.fightCrime();


