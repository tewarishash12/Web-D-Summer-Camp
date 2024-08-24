import { useState, useEffect } from "react";

const useFetch = (url) => {
    const abortController = new AbortController;
    const signal = abortController.signal;

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url, signal)
            .then((res)=>{
                if(!res.ok)
                    throw Error("Data cannot be fetched from the API");
                return res.json();
            })
            .then((data)=>{
                console.log("json parsing is successful");
            })
            .catch((err)=>{
                if(err.name === 'AbortError')
                    console.log("Fect was stopped beofre being completed");
                else
            })
        })
    })
    return () =>{
        abortController.abort();
    }
}

export default useFetch;