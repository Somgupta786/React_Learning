import './index.css'
import { useState } from "react";
function CreateNotes() {
  const [inputs, setInputs] = useState({
    firstname: "",
    gender: "",
    email: "",
    rollno: "",
    mobile: "",
    address: "",
    password: ""
    
});
const [error,setError]  =  useState({
  firstname: "",
    gender: "",
    email: "",
    rollno: "",
    mobile: "",
    address: "",
    password: ""
    
})
const handleChange = e => {
  setInputs({
    ...inputs,
    [e.target.name]: e.target.value
  });

}






  const email_valid= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobile_valid= /^((\+91)|(91)|0?)[6-9]\d{9}$/;
  const rollno_valid= /^[1-2]\d{12}$/;
  const valid_text=/^[a-zA-Z ]*$/;
  const password_valid=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/;
  const handleSubmit = e => {
    e.preventDefault();
    setError( {
    firstname: !valid_text.test(inputs.firstname.trim())|inputs.firstname.trim()===''|(inputs.firstname.length>15) ? 'Enter the First Name correctly!' : '',
    gender: inputs.gender ? '':'Enter your gender',
    address: !valid_text.test(inputs.address.trim())|inputs.address.trim()===''|(inputs.address.length>25) ? 'Enter the Address in short !' : '',
    rollno: !rollno_valid.test(inputs.rollno.trim())? 'Enter the Roll No correctly!' : '',
    mobile: !mobile_valid.test(inputs.mobile.trim())? 'Enter the Mobile No correctly!' : '',
    email: (inputs.email.trim() === '')|!email_valid.test(inputs.email.trim())|(inputs.email.length>50)? 'Enter the email correctly!' : '',
    password: !password_valid.test(inputs.password.trim())|(inputs.password.trim() === '')|(inputs.password.length<6) ? 'Password should contain atleast one letter and one number' : '',
   
  })

  
  
  let hasErrors = false;
  for (const i in error) {
    if (error[i] !== '') {
      hasErrors = true;
    }
  }

  if (!hasErrors) {
    console.log('Form submitted:', inputs);
  }
  else{
  console.log('fill all the details correctly!');
};
} 
  return { handleChange, inputs, handleSubmit, error };
}


export default CreateNotes;
