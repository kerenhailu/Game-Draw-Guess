import React from 'react'
import { Link , Outlet} from "react-router-dom";
export default function Admin() {
    const adminTabs=["AdminTable","AdminDetails","AdminDecorate"]
  return (
    <div className="adminRoutContainer">
 {adminTabs.map((name)=>
 {return  <li>
   
         <Link to={name}>{name}</Link>
     </li>
 })}
    <Outlet/>
    </div>
  )
}