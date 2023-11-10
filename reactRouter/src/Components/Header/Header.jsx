import React, { useId } from 'react'
import {NavLink} from 'react-router-dom'


export default function Header (){
    const cats = ["electronics","jewelery","men","women"];
    return (
        <>
        {/* div to wrap everything */}
        <div className='flex justify-between items-center border-2'>
            {/* image div */}
            <div>
                <img className="h-10 w-10" src="https://cdn-icons-gif.flaticon.com/11700/11700824.gif" alt="" />
            </div>
            {/* div for aligning */}

            <div>

            <div className='hidden md:block md:flex md:gap-4' >

                <NavLink to={''} >
                    {'All'}
                </NavLink>
                <NavLink to={`/${cats[0]}`} >
                    {cats[0].toUpperCase()}
                </NavLink>
                <NavLink  to={`/${cats[1]}`}>
                    {cats[1].toUpperCase()}
                </NavLink>
                <NavLink  to={`/${cats[2]}`}>
                    {cats[2].toUpperCase()}
                </NavLink>
                <NavLink  to={`/${cats[3]}`}>
                    {cats[3].toUpperCase()}
                </NavLink>
                
            </div>

            </div>
            {/* div for use and cart */}
            <div>
                <div>user</div>
                <div>cart</div>
            </div>

        </div>
        </>
    )

}