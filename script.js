function Person(age) {
    //var agel = 22;//приватне поле
    //function foo() { //приватна функція

    //}
    //// this - приватне
    var name = "Bob";
    this.getName = function () {
        return name;
    }
    //return { шаблон октрытия модуля
    //    getSpecs:getSpecs 
    //}
}
var person = new Person();
console.log(person.getName());
function Person() {
    this.name = 'bob';

}

Person.prototype.showName = function () { return this.name; };
var person = new Person();
console.log(person);
var user1 = {
    name: 'Steave',
    age:22
};
var user2 = {
    name: 'Bob'
};
user2.__proto__ = user1;
console.log(user2.age);
function inherit(proto) {
    function F() { };
    F.prototype = proto;
    return new F;
}
var obj = inherit(null);
obj.age = 42;
console.log(obj);
function Parent(name) {
    this.name = name;
    this.age = 34;
}
Parent.prototype.showName = function () { return this.name; }
Parent.prototype.showAge = function () { return this.age; }

function Child(name) {
    this.name = name;
    this.age = 14;
}
Child.prototype = Object.create(Parent.prototype);//передаємо прототип парент Child
Child.prototype.constructor = Child;//щоб конструктор не перезатерся
Child.prototype.showName = function () {
    return this.name;
}
var child = new Child('Bob');
console.log(child);//прототипом Child буде Parrent
