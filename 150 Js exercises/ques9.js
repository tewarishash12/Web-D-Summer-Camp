let currentDate = new Date();

const chrismas = new Date(currentDate.getFullYear(), 11, 25);

const days = 1000*60*60*24;

if(currentDate.getMonth()>11 && currentDate.getDate()>25){
    chrismas.setFullYear(chrismas.getFullYear()+1);
}

let time = Math.ceil((chrismas.getTime() - currentDate.getTime())/days)

console.log(`${time} days are left for chrismas`);