import React from 'react'

export default function Footer(){
    var currentDate=new Date();
return(
    <footer>
      <p> Copyright { currentDate.getFullYear()} </p>  
    </footer>
)
}