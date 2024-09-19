import React from "react";
import "../stylesCSS/functionStyle.css";
function SafdarAli (props){
    return(
        <div className="functionStyle">
            <i>My name is:{props.name}</i><hr />
            <i>My age is: {props.age}</i><hr/>
            <i>And Qualificaion is:{props.edu}</i><hr />
        </div>
    )
}
export default SafdarAli;