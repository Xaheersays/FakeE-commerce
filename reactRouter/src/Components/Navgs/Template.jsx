import application from '../../assets/application-store.gif'
import React from "react";



export default function Template(props){
    const {image,title,price,rate,count} = props
    // rating:{rate,count}
    return(
        <>

        {/* outer div */}
        <div className=' md:w-1/4  flex flex-col items-center p-4 bg-gray-200 text-black md:gap-4
        rounded-2xl cursor-pointer w-full shadow-lg justify-between
        ' 
        style={{ boxShadow: '0 4px 8px rgba(255, 255, 255, 0.8)', opacity: 0.92 ,margin:'left',margin:'right'}}
        >

            {/* image div */}
            <div className=''>
                <img className='h-80 w-auto rounded-2xl' src={image} alt="" />
            </div>

            {/* title */}
            <div>
                <h4 className='md:text-2xl text-center font-semibold ' >
                    {title}
                </h4>
            </div>
            <div className='flex-end flex flex-col items-center '>

                {/* price */}
                <div className='font-bold text-red-600'>
                    <p>
                    price : {price} &#x20B9;
                    </p>
                </div>
                {/* ratings */}
                <div className='flex flex-col items-center cursor-default'>
                    <p className='text-sm'>Ratings : {rate} &#9733;</p>
                    <p className='font-light '
                    >Total Ratings: {count}</p>
                </div>
            </div>

        </div>
        </>
    )

}