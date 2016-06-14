var person = {
	name: 'Manu',
	age: 30
};

function updatePerson(obj) {
	// obj = {
	// 	name: 'Manu',
	// 	age: 31
	// };
	obj.age = 31;
}

updatePerson(person);
console.log(person);