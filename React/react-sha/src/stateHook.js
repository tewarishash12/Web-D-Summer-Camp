import { useEffect, useState } from "react";

const StateHook = () => {

    let [name , setName] = useState("Shashwat Tewari");
    let [age , setAge] = useState(22);
    let [count, setCount]= useState(0);

    // let count=0;
    function changeValues(){
        console.log(count);
        if(count%2===0){
            setName("Arush Karnatak");
            setAge(19);
        }
        else{
            setName("Shashwat Tewari");
            setAge(22);
        }
        setCount(count+1);
        // count++;
    }
    return ( 
        <header>
            <h1>This is a state hook section</h1>
            <p id="change">My name is {name}, and my age is {age}</p>
            <button className="btn" onClick={changeValues}>Click to change</button>
        </header>
    );
}

export default StateHook;