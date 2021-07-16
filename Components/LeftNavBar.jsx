import React, { useRef, useState } from "react";
import TopNavBarIcon from "./TopNavBarIcon";
import ArrayMiddleIcons from "./ArrayMiddleIcons";
import ArrayDownIcons from "./ArrayDownIcons";
import UserInnerIcons from "./UserInnerIcons";
export default function LeftNavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [count,change]=useState(false)
  const Top=useRef(null)
  const Toplogo=useRef(null)
  function Top1(){
change(count? false : true)
return(<>
{count ? (Top.current.style.position="fixed") : (Top.current.style.position="inherit")}
{count ? (Toplogo.current.style.display="inherit") : (Toplogo.current.style.position="none")}

</>)
  }
  const activeClick = () => {
    setShowMenu(showMenu ? false : true);
  };
  function data2(val) {
    return <div className={val.classNani}>{val.icons}</div>;
  }

  function data1(val) {
    return (
    <>

    <div className={val.classNani}><span className={val.i}>{val.icons}</span><span className={val.iconsclassname}>{val.iconsname}</span></div>
  
   
    </>)}

  function data(papa) {
    return (
      <>
        {papa.key == 2 ? (
          <div onClick={activeClick} className={papa.classNani}>
            {papa.icons}{" "}<span className="MiddleIconName name2">User</span>
        
          </div>
        ) : (papa.key==1?
          <div className={papa.classNani}>{papa.icons}{" "}<span  className="MiddleIconName name1">Dashboard</span>
         </div>:<div  className={papa.classNani}>{papa.icons}{" "}
         <span  className="MiddleIconName name3">Master</span>
            </div>
        )}

        {papa.key == 2 ? (
          showMenu ? (
            <div className="dropDowns">{UserInnerIcons.map(data1)}</div>
          ) : null
        ) : null}
      </>
    );
  }

  return (
    <>
      <div className="LeftNavBarBox">
      
        <div className="ArrayMiddileTopIcons">

        <span onClick={Top1} ref={Top}> {TopNavBarIcon[0].icons}</span>
        <span ref={Toplogo} className="Logo"> {TopNavBarIcon[1].Alphalytelogo}</span>

          <div className="navebarElementName">
            {ArrayMiddleIcons.map(data)}
            

            {/* <div>
        {showMenu ? (
          <div className="menu">
            <ul className="dropDownMenu">
               <li className="dropDownItems" >    User Master </li>
             <li className="dropDownItems">    User Group Master </li>
            <li className="dropDownItems">User Log Report</li>
             <li className="dropDownItems">   Change Password</li>
              <li className="dropDownItems"> Reset Password</li>
            </ul>
          </div>
        ) : null}
      </div> */}
          </div>
        </div>
        <div className="ArrayDownIcons">{ArrayDownIcons.map(data2)}</div>
      </div>
    </>
  );
}
