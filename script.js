//your JS code here. If required.
let student={
	name:"akash",
	age:24,
};
Object.prototype.getKeys = function() {
  return Object.keys(this);
};
console.log(student.getKeys());