import React from "react";
// import PropTypes from "prop-types";
export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  // const changeColor=()=>{
  //     let d=document.getElementById("alertchangecolor");
  //     d.style.backgroundColor="white";
  //     d.style.color="green";
  // }style={{backgroundColor:props.mode=='light'?'black':'white'}}
  return (
    <div>
      
    {props.alert && 
      <div
        className={`alert alert-${props.alert.type}      alert-dismissible fade show`}
        style={{backgroundColor: props.mode==='light'?'black':'white'}}
        role="alert"
        >
        <strong>{capitalize(props.alert.type)}</strong>
        {props.alert.msg}
      </div>}
    
    </div>
  )
}
