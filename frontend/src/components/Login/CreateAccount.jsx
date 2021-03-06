import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { API_LINK_ACCOUNT_CREATE } from '../../api_link';

import './login.css'
const CreateAccount = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [role] = useState('user');
  const [status] = useState(1);

  const apiURL = API_LINK_ACCOUNT_CREATE

  const history = useHistory();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (name.trim().length !== 0 && email.trim().length !== 0 && password.trim().length !== 0 && password2.trim().length !== 0) {
      if (password2.trim().toLowerCase() === password.trim().toLowerCase()) {
        // luu database
        const createAccount = async (inputURL, inputData) => {
          const data = {
            ...inputData
          }
          const response = await fetch(inputURL, {
            method: "POST",
            body: JSON.stringify(data),
          });
          return response.json();
        }
        const data = {
          name: name,
          address: address,
          email: email,
          password: password,
          password2: password2,
          role: role,
          status: status
        }
        createAccount(apiURL, {...data})
          .then(result => {
            setTimeout(() => {
              history.push('/login')
            }, 600)
          })
      }
    }

  }
  return (
    <div className="body-form">
      <div className="container_form">
        <form onSubmit={handleSubmitForm} className="form" id="createAccount">
          <h2 className="form__title">Create Account</h2>

          <div className="form__input-group">
            <input onChange={(e) => setName(e.target.value)} defaultValue={name} type="text" className="form__input" autoFocus placeholder="Name" required />
          </div>
          <div className="form__input-group">
            <textarea onChange={(e) => setAddress(e.target.value)} className="form__input" defaultValue={address} placeholder="HCM"></textarea>
          </div>
          <div className="form__input-group">
            <input onChange={(e) => setEmail(e.target.value)} defaultValue={email} type="email" className="form__input" placeholder="Email Address" required />
          </div>
          <div className="form__input-group">
          </div>
          <div className="form__input-group">
            <input onChange={(e) => setPassword(e.target.value)} defaultValue={password} type="password" className="form__input" placeholder="Password" autoComplete="off" required />
          </div>
          <div className="form__input-group">
            <input onChange={(e) => setPassword2(e.target.value)} defaultValue={password2} type="password" className="form__input" placeholder="Confirm password" autoComplete="off" required />
          </div>

          <div className="form__input-group">
            <button className="form__button" type="submit">Continue</button>
          </div>
          <p className="form__text">
            <Link className="form__link" to="/login" id="linkLogin">Already have an account? Sign in</Link>
          </p>
        </form>
      </div>
    </div>

  );
}

export default CreateAccount;
