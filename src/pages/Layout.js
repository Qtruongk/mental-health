import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import Logo1 from "../assets/Logo-1.png";
const Layout = () => {
    useEffect(() => {
        const blogsItem = document.querySelector(".blogs__item");
        const blogsMenu = document.querySelector(".blogs__menu");
    
        const handleScroll = () => {
          const { top } = blogsItem.getBoundingClientRect();
          if (top < 0) {
            blogsMenu.classList.add("show");
          } else {
            blogsMenu.classList.remove("show");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <>
    <header className="header" id="header"> 
        <nav className="nav container">
            <div className="logo__container">
                <img src={Logo1} alt="Logo__web" className="logo__img"></img>
                <div className="text__logo">
                    <span className="logo__head1">XPT</span>
                    <span className="logo__head2">“ You are not your illness”</span>
                </div>
            </div>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <box-icon name='home-alt' className="nav-icon"></box-icon>  
                        <Link to="/" className="nav__link">  
                            <span class="nav__name">Home</span>
                        </Link>        
                    </li>
                    <li className="nav__item">
                        <box-icon name='calendar-alt' className="nav-icon"></box-icon>
                        <Link to="services" className="nav__link">
                            <span class="nav__name">Services</span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <box-icon name='message-square' className="nav-icon"></box-icon>                        
                        <Link to="chatwAI" className="nav__link">
                            <span class="nav__name">ChatwAI</span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <box-icon name='window-alt'></box-icon>                        
                        <Link to="chill" className="nav__link">
                            <span class="nav__name">Chill room</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    
    <Outlet />
    </>
  )
};

export default Layout;