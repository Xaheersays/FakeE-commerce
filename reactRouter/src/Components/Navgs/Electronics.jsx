import React, { useEffect, useMemo, useRef, useState } from "react";
import Template from './Template'

export default function Electronics(){
    // i am getting array of 20 objects
    const [data,setData] = useState([])
    const url = "https://fakestoreapi.com/products/category/electronics";
    useEffect(()=>{
      fetch(url).then(res=>res.json()).then((data)=>{
          setData(data)
          console.log(data)
      })
      .catch(error=>console.error(error));
  },[])
    const data_arr = useMemo(() => {
      return data.map((data_obj) => (
        <Template
          key={data_obj.id}
          image={data_obj.image}
          title={data_obj.title}
          price={data_obj.price}
          rate={data_obj.rating.rate}
          count={data_obj.rating.count}
        />
      ));
    }, [data]);



    return (
        <>
        <div className=" flex flex-wrap w-screen   justify-around md:p-3 gap-10 p-4">
            {data_arr}
        </div>
        </>
    )
}