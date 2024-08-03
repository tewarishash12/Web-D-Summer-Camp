const peoples = ["Alice", "Bob", "Charlie", "David", "Eva", "Fiona", "George", "Hannah", "Ian", "Julia"];
const ages = [86, 72, 67, 19, 97, 54, 64, 93, 73, 81];

function sayHello(){
    console.log("Hello");
}

// console.log(peoples);
// console.log(ages);

module.exports = {
    people: peoples,
    age: ages,
    sayHello
}