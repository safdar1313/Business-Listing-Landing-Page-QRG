import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Index(){
    return(
        <div>
            <ul className="headerUl">
                <Link to={"/HomePage"}>
                    <li>Home</li>
                </Link>
                <Link to= {"/about"}>
                    <li>About US</li>
                </Link>
                <Link to={"/services"}>
                    <li>Services</li>
                </Link>
                
            </ul>
        </div>
    )
}
export default Index;