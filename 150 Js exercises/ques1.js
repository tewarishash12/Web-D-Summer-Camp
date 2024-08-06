const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let cDate = new Date();

console.log(`Today is ${daysOfWeek[cDate.getDay()]}`);
console.log(`Current time is: ${cDate.getHours()}:${cDate.getMinutes()}:${cDate.getSeconds()}`);
