import React, { useState } from 'react'
import ImageGreenMind from '../Images/GREENMIND.svg'
import menu from "../Images/align-justify.svg"
import x from "../Images/x.svg"

const HeaderMenuMobile = () => {
     const [showIcon, setShowIcon] = useState(false);
     const handleShowMenu = () => {
          var x = document.getElementById("myLinks");
          if (x.style.display === "block") {
               x.style.display = "none";
               setShowIcon(false);
          } else {
               x.style.display = "block";
               setShowIcon(true);
          }
     }

     return (
          <section className='header-menu-mobile'>
               <div className='container'>
                    <div className='row'>
                         <div className='col'>
                              <div className='menu'>
                                   <div class="topnav">
                                        <img src={ImageGreenMind} alt="" className='img-green-mind mt-1 active'></img>
                                        <a href="javascript:void(0);" class="icon" onClick={() => handleShowMenu()}>
                                             {
                                                  !showIcon ? (<img className="" src={menu} alt=""></img>) : (<img className="" src={x} alt=""></img>)
                                             }

                                        </a>
                                   </div>
                                   <div id="myLinks">
                                        <ul className="link">
                                             <li>
                                                  <a href="/" className="" alt="">Home</a>
                                             </li>
                                             <li>
                                                  <a href="/" className="" alt="">Product</a>
                                             </li>
                                             <li>
                                                  <a href="/" className="" alt="">Contact</a>
                                             </li>
                                        </ul>
                                        <ul className='menu-icon'>
                                             <li>
                                                  <img className="" src={require('../Images/Cart.png')} alt=""></img>
                                             </li>
                                             <li>
                                                  <img className="" src={require('../Images/Person.png')} alt=""></img>
                                             </li>
                                             <li>
                                                  <img className="" src={require('../Images/Line 1.png')} alt=""></img>
                                             </li>
                                             <li>
                                                  <img className="" src={require('../Images/FilterRight.png')} alt=""></img>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default HeaderMenuMobile

