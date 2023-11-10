import React, { useId, useState } from 'react'
import {NavLink} from 'react-router-dom'
import burgerImage from '../../assets/44134779.jpg';


export default function Header (){
    const [hide,setHide] = useState(true)
    const cats = ["electronics","jewelery","men","women"];
    return (
        <>
        {/* div to wrap everything */}
        <div className='flex justify-between items-center border-2 p-3 relative'>
            {/* image div */}
            <div>
                <img className="h-20 w-20 rounded-full" src="https://cdn-icons-gif.flaticon.com/11700/11700824.gif" alt="" />
            </div>

            {/* div for aligning */}
            {/* this div is for  */}
            <div >
                {/* ham div */}
                <div>
                    {/* to make hide in a wrappr */}
                    <div className='flex flex-col ' >
                    {/* for image */}
                    <div>
                        <img className='h-10 w-10 cursor-pointer' 
                        src={burgerImage} alt="" />
                    </div>
                    {/* for links */}
                    <div 
                    style={{top:65,left:0}} className='flex flex-col absolute z-10 p-2 h-60  w-screen  bg-slate-500 justify-between text-center ' >
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
                </div>


                {/* spread div */}
                <div className='hidden md:flex md:gap-4  md:block' >
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