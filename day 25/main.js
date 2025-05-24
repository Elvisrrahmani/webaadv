var progammingLanguages = ["Java Script","php","java"];

progammingLanguages.pop();

progammingLanguages.push("Python");

progammingLanguages.unshift("C#");

progammingLanguages.shift();

console.log(progammingLanguages[2]);

console.log(progammingLanguages);

var progammingLanguages1 = ["Java Script","php","java","Python","C#"];

progammingLanguages1.splice(1,2, "ruby");

console.log(progammingLanguages1);

console.log(Math.floor(Math.random()*10));

var students = ["Student 1","Student 2","Student 3"];

var [s1, , s3,] = students;

console.log(s1);
console.log(s3);

var students1 = ["Paris","London","Berlin"];

var [s1, , s3,] = students1;

console.log(s1);
console.log(s3);

var numbers = [1,2,3,4,5,6,7,8,9,10];

var[first, second, ...otherNumbers] = numbers;

console.log(first);
console.log(second);
console.log(otherNumbers.toString());