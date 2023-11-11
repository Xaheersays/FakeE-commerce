import application from '../../assets/application-store.gif'


import React from "react";
export default function Template(props){
    const {image,title,price} = props
    // rating:{rate,count}
    return(
        <>
        Template
        {/* outer div */}
        <div className='border-2 max-w-sm flex flex-col items-center p-4 bg-violet-200 text-black gap-4
        rounded-2xl cursor-pointer
        ' >
            {/* image div */}
            <div className=''>
                <img className='h-80 w-auto rounded-2xl' src={application} alt="" />
            </div>

            {/* title */}
            <div>
                <h4 className='text-2xl text-center font-semibold' >
                    {"title djkfk kjdakjd  lfkalkd ajdkjad adjksadks"}
                </h4>
            </div>
            {/* price */}
            <div className='font-bold text-red-700'>
                <p>
                price : {"price"} &#x20B9;
                </p>
            </div>
            {/* ratings */}
            <div className='flex flex-col items-center cursor-default'>
                <p className='text-sm'>Ratings : {4} &#9733;</p>
                <p className='font-light '
                >Total Ratings: {120}</p>
            </div>

        </div>
        </>
    )

}