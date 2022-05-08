"use strict"

// class car {
// 	color
// 	fuel

// 	go() {

// 	}

// 	turn() {

// 	}

// 	stop() {

// 	}
// }

// let myCar = new car; //команда заводу сделать авто.
// myCar.color = 'red';
// myCar.fuel = 50;

// myCar.go();
// myCar.turn();
// myCar.stop();

// class Employee {
// 	show(name, solary) {
// 		return name + ' ' + solary;
// 	}
// 	objThis() {
// 		console.log(this.name + ' ' + this.solary);
// 	}
// 	name
// 	age
// 	solary
// }

// let employee1 = new Employee;//объект класса
// employee1.name = 'Vit';
// employee1.age = 41;
// employee1.solary = 300;
// console.log(employee1);

// let employee2 = new Employee;//объект класса
// employee2.name = 'Lex';
// employee2.age = 30;
// employee2.solary = 255;
// console.log(employee2);
// console.log(employee2.show('Jason', 3500));
// employee2.objThis();



class Student {
	name
	surn
	show() {
		return this.initials(this.name + ' ' + this.surn);
	}
	initials(str) {
		console.log(str)
		return str[0].toUpperCace() + str.slice(1);
	}
}

let student = new Student;
student.name = 'Vitalick';
student.surn = 'Bokhan';
student.show();





