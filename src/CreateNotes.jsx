import './index.css';
import { useState } from "react";

function CreateNotes() {
  const [inputs, setInputs] = useState({
    firstname: "",
    gender: "",
    email: "",
    rollno: "",
    mobile: "",
    address: "",
    password: "",
    passwordConfirm: ""
  });

  const [error, setError] = useState({
    firstname: "",
    gender: "",
    email: "",
    rollno: "",
    mobile: "",
    address: "",
    password: "",
    passwordConfirm: ""
  });

  const email_valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobile_valid = /^((\+91)|(91)|0?)[6-9]\d{9}$/;
  const rollno_valid = /^[1-2]\d{12}$/;
  const valid_text = /^[a-zA-Z ]*$/;
  const password_valid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/;

  const handleChange = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });

    setError({
      ...error,
      [name]: (name === "firstname"  && value.trim() !== '' && (!valid_text.test(value.trim()) || value.trim() === '' || value.length > 15)) ? 'Name should not contain any number' :
              (name === "gender" && value.trim() === '') ? 'Enter your gender' :
              (name === "address" && value.trim() !== '' && (!valid_text.test(value.trim()) || value.trim() === '' || value.length > 25)) ? 'Do not use numbers' :
              (name === "rollno" && value.trim() !== '' && !rollno_valid.test(value.trim())) ? 'Roll number should contain 13 numeric value!' :
              (name === "mobile" && value.trim() !== '' && !mobile_valid.test(value.trim())) ? '10 valid digits needed!' :
              (name === "email" && value.trim() !== '' && (value.trim() === '' || !email_valid.test(value.trim()) || value.length > 50)) ? 'Enter the email correctly!' :
              (name === "password" && value.trim() !== '' && (!password_valid.test(value.trim()) || value.trim() === '' || value.length < 6)) ? 'Password should contain at least one letter and one number' : 
              (name === "passwordConfirm" && value.trim() !== '' && value !== inputs.password) ? 'Password is not matching!' : '' 
  
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    let hasErrors = false;
    for (const key in error) {
      if (error[key] !== '') {
        hasErrors = true;
        break; 
      }
    }

    if (!hasErrors) {
      console.log('Form submitted:', inputs);
    } else {
      console.log('Fill all the details correctly!');
    }
  };

  return { handleChange, inputs, handleSubmit, error};
}

export default CreateNotes;
