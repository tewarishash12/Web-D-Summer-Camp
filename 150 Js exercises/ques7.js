for(let year=2014;year<=2050;year++){
    let currentDay = new Date(year, 0, 1);
    if(currentDay.getDay()===0)
        console.log(`${year} first day will be Sunday`);
}