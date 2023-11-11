import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import burgerImage from "../../assets/44134779.jpg";
import user from "../../assets/profile.gif";
import cart from "../../assets/shopping-cart.gif";
// C:\zaheer\react\ReactRouter\reactRouter\src\assets\shopping-cart.gif

export default function Header() {
  const [hide, setHide] = useState(false);
  const cats = ["electronics","jewelery", "men", "women"];

  // dont even try to  make new navLinks again and again on render
  const navLinks = useMemo(() => {
    return cats.map((cat, index) => (
      <NavLink
        key={index}
        to={`/${cat}`}
        className={({ isActive }) =>
          `
          ${isActive ? "text-orange-500 font-bold shadow-xl" : "text-white"}
        `
        }
      >
        {cat.toUpperCase()}
      </NavLink>
    ));
  }, [cats]);
  return (
    <>
      {/* div to wrap everything */}
      <div className="flex justify-between items-center border-2 p-3 relative">
        {/* image div */}
        <div>
          <img
            className="h-20 w-20 rounded-full"
            src="https://cdn-icons-gif.flaticon.com/11700/11700824.gif"
            alt=""
          />
        </div>

        {/* div for aligning  and this div is for  just */}
        <div>
          {/* ham div */}

          <div>
            {/* to make hide in a wrappr */}
            <div className="flex flex-col md:hidden">
              {/* for image */}
              <div className="relative left-2">
                <img
                  className="h-10 w-10 cursor-pointer"
                  src={burgerImage}
                  alt=""
                  onClick={() => setHide(!hide)}
                />
              </div>
              {/* for links */}
              {hide && (
                <div
                  style={{ top: 95, left: 0 }}
                  className="flex flex-col absolute z-10 p-2 h-60  w-screen  bg-slate-500 justify-between text-center "
                >
                  <NavLink
                    to={""}
                    className={({ isActive }) =>
                      `
                    ${isActive ? "text-orange-500 font-bold shadow-xl" : "text-white"}
                      `
                    }
                  >
                    {"All"}
                  </NavLink>

                  {navLinks}
                </div>
              )}
            </div>
          </div>

          {/* spread div */}
          <div className="hidden md:flex md:gap-4  md:block">
            <NavLink
              to={""}
              className={({ isActive }) =>
                  `
                    ${isActive ? "text-orange-500 font-bold shadow-xl" : "text-white"}
                  `
              }
            >
              {"All"}
            </NavLink>
            {navLinks}
          </div>
        </div>

        {/* div for use and cart */}
        <div className=" flex gap-2">
          <div>
            <div>
              <img
                className="h-10 cursor-pointer w-10 rounded-full"
                src={user}
                alt=""
              />
            </div>
          </div>
          <div>
            <div>
              <img
                className="h-10 w-10 cursor-pointer rounded-full shadow-white"
                src={cart}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
