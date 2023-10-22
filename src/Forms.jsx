import './index.css';
import Validation from "./CreateNotes";

export default function Forms() {
  const { handleChange, inputs, handleSubmit, error } = Validation();

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
          placeholder="Full Name"
          className="inputBox"
        />
        {error.firstname !== '' && <p style={{ color: "red" }}>{error.firstname}</p>}

        <label htmlFor="rollno" className='label'>Roll number :</label>
        <input
          required
          value={inputs.rollno}
          onChange={handleChange}
          type="number"
          name="rollno"
          placeholder="Roll Number"
          className="inputBox"
        />
        {error.rollno !== '' && <p style={{ color: "red" }}>{error.rollno}</p>}

        <label htmlFor="mobile" className='label'>Phone No :-</label>
        <input
          required
          value={inputs.mobile}
          onChange={handleChange}
          className="inputBox"
          type="number"
          name="mobile"
          placeholder="Phone no."
        />
        {error.lastname !== '' && <p style={{ color: "red" }}>{error.mobile}</p>}

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
        {error.email !== '' && <p style={{ color: "red" }}>{error.email}</p>}

        <label htmlFor="address" className='label'>Adress</label>
        <input
          required
          value={inputs.city}
          onChange={handleChange}
          type="text"
          name="address"
          placeholder="Adress"
          className="inputBox"
        />
        {error.address !== '' && <p style={{ color: "red" }}>{error.address}</p>}

        <label htmlFor="gender" className='label'>Gender:</label>
        <div className="gender" onChange={handleChange}>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
        {error.gender !== '' && <p style={{ color: "red" }}>{error.gender}</p>}

        <label htmlFor="password" className='label'>Password</label>
        <input
          required
          value={inputs.password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          className="inputBox"
        />
        {error.password !== '' && <p style={{ color: "red" }}>{error.password}</p>}

        <button className="button">SUBMIT</button>
      </form>
    </div>
  );
}
