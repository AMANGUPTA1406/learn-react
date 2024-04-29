import React, { useEffect, useState } from "react";


export default function GitHub(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshChoudhary")
        .then((res)=>{ res.json();})
        .then(data => {
            console.log(data);
            setData(data);        
        }
        )}
        , [])
    
    return(
        <>
            <h1>GitHub Followers: {data.followers}</h1>
        </>
    )
}