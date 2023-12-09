import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <>     
            <header className="header-body">
                <svg className="logo" viewBox="0 0 216 756" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 540H0V756H48V540Z" fill="#E9DCDE" />
                    <path d="M132 540H84V648H132V540Z" fill="#E9DCDE" />
                    <path d="M216 540H168V756H216V540Z" fill="#E9DCDE" />
                    <path d="M48 318V438H216V486H0V270H216V318H48Z" fill="#E9DCDE" />
                    <path d="M216 0V216H168V48H48V216H0V0H216Z" fill="#E9DCDE" />
                    <path d="M132 108H84V156H132V108Z" fill="#E9DCDE" />
                </svg>

                <section className="links">
                    <div>Work</div> 
                    <div>About</div>
                    <div>Contact</div>
                </section>
                
            </header>


        </>
    )
}

export default Header