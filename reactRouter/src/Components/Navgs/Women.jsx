import React, { useEffect, useMemo, useState } from "react";
import Template from './Template'


export default function Women(){
    // i am getting array of 20 objects
    
    

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
        <div className="border-2 flex flex-wrap w-screen   justify-around md:p-3 gap-10 p-4">
            {data_arr}
        </div>
        </>
    )
}
