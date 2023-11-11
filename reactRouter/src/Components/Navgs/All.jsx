import React from "react";
import Template from './Template'


export default function All(){
    const url = "https://fakestoreapi.com/products";
    fetch(url).then(res=>res.json()).then((data)=>{
        console.log(data)
    })
    return (
        <Template />
    )
}
