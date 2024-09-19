import React from "react";
import "./style.css";

function Home(){
    return(
        <div>
            <ul className="headerUl">
                <Link>
                    <li>About US</li>
                </Link>
                <Link>
                    <li>Services</li>
                </Link>
                <Link>
                    <li>Contact US</li>
                </Link>
            </ul>
        </div>
    )
}
export default Home;