import './index.css';
import Validation from "./CreateNotes";
import { useState } from "react";

export default function Forms() {
  const { handleChange, inputs, handleSubmit, error } = Validation();
  const [visible, setVisible] = useState(false);
  const togglePassword = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <label htmlFor="firstname" className='label'> Full Name:</label>
        <input
          required
          value={inputs.firstname}
          onChange={handleChange}
          type="text"
          name="firstname"
          maxLength="15"
          placeholder="Full Name"
          className="inputBox"
        />
        {error.firstname !== '' ? <p className="errorMessage" style={{ color: "red" }}>{error.firstname}</p> : <p className="errorMessage"></p>}

        <label htmlFor="rollno" className='label'>Roll number :</label>
        <input
          required
          value={inputs.rollno}
          onChange={handleChange}
          type="text"
          name="rollno"
          placeholder="Roll Number"
          className="inputBox"
        />
        {error.rollno !== '' ? <p className="errorMessage" style={{ color: "red" }}>{error.rollno}</p> : <p className="errorMessage"></p>}

        <label htmlFor="mobile" className='label'>Phone No :-</label>
        <input
          required
          value={inputs.mobile}
          onChange={handleChange}
          maxLength="10"
          className="inputBox"
          type="text"
          name="mobile"
          placeholder="Phone no."
        />
        {error.mobile !== '' ? <p className="errorMessage" style={{ color: "red" }}>{error.mobile}</p> : <p className="errorMessage"></p>}

        <label htmlFor="email" className='label'>Email</label>
        <input
          required
          className="inputBox"
          value={inputs.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
        />
        {error.email !== '' ? <p className="errorMessage" style={{ color: "red" }}>{error.email}</p> : <p className="errorMessage"></p>}

        <label htmlFor="address" className='label'>Address</label>
        <input
          required
          value={inputs.city}
          onChange={handleChange}
          type="text"
          name="address"
          maxLength="25"
          placeholder="Address"
          className="inputBox"
        />
        {error.address !== '' ? <p className="errorMessage" style={{ color: "red" }}>{error.address}</p> : <p className="errorMessage"></p>}

        <label htmlFor="gender" className='label'>Gender:</label>
        <div className="gender" onChange={handleChange}>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
        {error.gender !== '' ? <p className="errorMessage" style={{ color: "red" }}>{error.gender}</p> : <p className="errorMessage"></p>}

        <label htmlFor="password" className='label'>Password</label>
        <div className="password_input">
          <input
            required
            value={inputs.password}
            onChange={handleChange}
            type={visible ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="inputBox"
          />
          <button className='show_Button' onClick={togglePassword}>
            {visible ? "Hide" : "Show"}
          </button>
        </div>
        {error.password !== '' ? <p className="errorMessage" style={{ color: "red" }}>{error.password}</p> : <p className="errorMessage"></p>}

          <label htmlFor="passwordConfirm" className='label'>Confirm Password</label>
          <input required
            type="password"
            name="passwordConfirm"
            placeholder="Confirm password"
            value={inputs.passwordConfirm}
            onChange={handleChange}
            className="inputBox"
          />
          
          {error.passwordConfirm !== '' ? <p className="errorMessage" style={{ color: "red" }}>{error.passwordConfirm}</p> : <p className="errorMessage"></p>}
         
        <button className="button" >SUBMIT</button>
      </form>
    </div>
  );
}
