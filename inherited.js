var objProperty = {
	constructor: function (name, age, surname){
		this.name = name;
		this.age = age;
		this.surname = surname;
		return this;
	},
	greet: function(){
		alert("Hi my name is " + this.name + ", my age is " + this.age + ", my surname is " + this.surname )
	}
}

var Person1  = Object.create(objProperty).constructor("Bob",19,"Sojma");
var Person2  = Object.create(objProperty).constructor("Jek",18,"Bonchack");
var Person3  = Object.create(objProperty).constructor("Orest",22,"Petriv");

/*Person1.greet();
Person2.greet();
Person3.greet();

alert(objProperty.isPrototypeOf(Person1));*/

var wepDevSkils = Object.create(objProperty)
wepDevSkils.constructor = function(name, age, surname, skills){
	objProperty.constructor.apply(this, arguments);
	this.skills = skills || [];
	return this;
}

wepDevSkils.greet2 = function() {
	alert("My skills is ...");
}

var PersonDev1 = Object.create(wepDevSkils).constructor("Yuriy", "22","Pavlyo",[" PHP"," JS"," jQuary"," C++"," Asembler"]);
PersonDev1.greet();
PersonDev1.greet2();
alert(PersonDev1.skills);