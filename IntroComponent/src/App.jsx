import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  function handleSubmit(formData){
    console.log("logged");
    const email = formData.get('email');
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const password = formData.get('password');
    const data = {email, firstname, lastname, password};

    const validationErrors = validate(data);
    console.log(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
  } else {
    console.log("Form submitted", data);
    setErrors({});
    // hier State aktualisieren (falls du die Daten brauchst)
    setForm(data);
  }
  }

  function validate(values) {
    let newErrors = {};
    if (!values.firstname) newErrors.firstname = "First name is required";
    if (!values.lastname) newErrors.lastname = "Last name is required";
    if (!values.email.includes("@"))
      newErrors.email = "Email must be valid";
    if (values.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  }

  function handleChange(event){
    setErrors({...errors, [event.target.name]: ""});
  }


  return (
    
      <main>
        <div className='left-part'>
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
        </div>
        <div className='right-part'>
          <button className='trial-button'>
            <span>Try it free 7 days </span> 
            than $20/mo. thereafter
          </button>
          <form action={handleSubmit} novalidate="novalidate">
            <div className='lvg'>
              <input type='text' id='firstname' name='firstname' placeholder='First Name' onChange={handleChange}/>
              {errors.firstname && <span>{errors.firstname}</span>} 
            </div>

            <div className='lvg'>
              <input type='text' id='lastname' name='lastname' placeholder='Last Name' onChange={handleChange}/>
              {errors.lastname && <span>{errors.lastname}</span>}
            </div>

            <div className='lvg'>
              <input type='email' id='email' name='email' placeholder='Email Adress' onChange={handleChange}/>
              {errors.email && <span>{errors.email}</span>} 
            </div>

            <div className='lvg'>
              <input type='password' id='password' name='password' placeholder='Password' onChange={handleChange}/>
              {errors.password && <span>{errors.password}</span>} 
            </div>
            <button>CLAIM YOUR FREE TRIAL</button>
            <p>By clicking the Button you are agreeing our <a href=''>Terms and Services</a></p>
          </form>
        </div>
      </main>
    
  )
}

export default App
