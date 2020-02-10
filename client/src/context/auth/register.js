import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const { name, email, password, password2 } = user;
  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please Enter all fields', 'danger');
      //   console.log('Please enter all fiel');
    } else if (password !== password2) {
      setAlert('passworld not match', 'danger');
      //   console.log(setAlert());
    } else {
      console.log('Register submit');
    }
  };
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="passoword">Passoword</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="passoword2">Confirm Passoword</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
          ></input>
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;