
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
var currentdate = new Date();
var currentTime=currentdate.getHours();
var text="";
var styles={color:""};
if(currentTime>0&&currentTime<12){
  text="GOODMORNING";
  styles.color="red";
}
else if(currentTime>12&&currentTime<18){
  text="GOODAFTERNOON";
  styles.color="blue";
}
else{
  text="GOODNIGHT";
  styles.color="green";
}


ReactDOM.render(<h1 className='heading' style={
styles
}>{text}</h1>,document.getElementById("root"));

