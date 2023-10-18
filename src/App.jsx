import React from "react";
import contacts from './contacct'

function Card(props){
    return (
        <div>
          <h1 className="heading">My Contacts</h1>
          <div className="card">
            <div className="top">
              <h2 className="name">{props.name}</h2>
              <img className="circle-img"
                src={props.src}
                alt="avatar_img"
              />
            </div>
            <div className="bottom ">
              <p className="info ">{props.tel}</p>
              <p className="info ">{props.mail}</p>
            </div>
          </div>
        </div>
      );
}
function placing(cont){
<Card name={cont.name}
    src={cont.imgURL}
    tel={cont.phone}
    mail={cont.email}
/>
}
function App() {
    return(<>{contacts.map(placing)
     } </>
    
    
    
    
    
    
    );
 
}

export default App;
