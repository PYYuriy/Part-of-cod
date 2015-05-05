Person = function(name,surname){ 
	this.name = name;
	this.surname = surname;

} 

Person.prototype.greet = function() {			//осіклькт всі функції(конструктори ). наслідуються від прототипа то  в началі вони мають пустий прототип , в який можна щось дописувати
	console.log("Hello, my name is "+this.name);
	console.log("Sername is "+this.surname);
}

Developer = function(name,surname,skills){
	Person.apply(this,arguments);
	this.skills = skills || [];
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor =Developer;

developer = new Developer("Alex","Jordan",["php","js","c++"]);
console.log(developer.name);
console.log(developer.skills);
developer.greet();