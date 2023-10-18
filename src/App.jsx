import React from "react";


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

function App() {
    return(<><Card 
        name="Beyonce"
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        mail="b@beyonce.com"
        /> 
        
        <Card 
        name="Jack Bauer"
        src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="+987 654 321"
        mail="jack@nowhere.com"
        />
        <Card 
        name="Chuck Norris"
        src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel="+918 372 574"
        mail="b@beyonce.com"
        />
        </>
    
    
    
    
    
    
    );
 
}

export default App;
