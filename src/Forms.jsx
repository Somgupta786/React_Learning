import { useState } from "react";
import './index.css'

function Forms() {

    const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    // Validate email using a regular expression
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailPattern.test(inputValue));
  };
 return(<div>
    <form className="inputForm" >
<input required
     type="text"
     name="firstname"
    placeholder="First Name"
      className="inputBox" />  
<input  required
    className="inputBox"
    type="text"
    name="lastname"
     placeholder="Last Name" />
      <input  
      required
      className="inputBox"
      onChange={handleEmailChange}
            type="email"
            name="email"
            placeholder="Email"
          />
            

 <input  required
            type="textarea"
            name="address"
            placeholder="City"
            className="inputBox"
          />
          <input required
            type="text"
            name="username"
            placeholder="Username"
            className="inputBox"
          />
          <input required
            type="password"
            name="password"
            placeholder="Password"
            className="inputBox"
          />
 <button className="button">SUBMIT</button>
 {!isValidEmail && <p style={{color:"black"
 }}>Please enter a valid email address.</p>}
    </form>
 </div>)
  
}

export default Forms;
