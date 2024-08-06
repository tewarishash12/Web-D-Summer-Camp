setTimeout(()=>{
    console.log("Running Function with 2s delay");
    for(let i=0;i<4;i++){
        setTimeout(async()=>{
            console.log("Running Function with 1s delay", i);
        }, 1000);
    }
}, 2000);