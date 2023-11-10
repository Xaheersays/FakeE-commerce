## react router library is third party library

- we dont use `<a>` tags becoz it refreshes page
- instead react router provides us `Link` , `Navlink` 
- ``
```jsx
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
```