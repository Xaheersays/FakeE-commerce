import React, { useEffect, useMemo, useRef, useState } from "react";
import Template from './Template'
import { FetchData  } from "./DataFetch.js";

export default function Electronics(){
    // i am getting array of 20 objects
    const url = "https://fakestoreapi.com/products/category/electronics";
    const [data, setData] = useState([]);
    const data_arr = useRef([])
    useEffect(() => {
        const FetchData = async () => {
          const result = await fetchData(url);
          if (result) {
            setData(result);
            console.log(result);
          }
        };
    
        FetchData();
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
  
      }, []);


    
    return (
        <>
        <div className="border-2 flex flex-wrap w-screen   justify-around md:p-3 gap-10 p-4">
            {data_arr}
        </div>
        </>
    )
}
