import React,{useState} from 'react'
import './Formval.css'
import Validation from './Validation';

function Formval() {
  const[formdata,setFormdata]=useState({
    username:"",
    email:"",
    password:""

  });
  const[errors,setErrors]=useState({});

  const handleChange=(e)=>{
    const newObj={...formdata,[e.target.name]:e.target.value}
    setFormdata(newObj);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
   setErrors(Validation(formdata));
  }
  return (
    
<div className='container'>  
  
          <div className="content_2">
          <h2>Registration form</h2>
        <input type="text"
        name="username"
        placeholder='name'
        value={formdata.username}
        onChange={handleChange}/>
        {errors.username && <p>{errors.username}</p>}
        </div>
         <div>
        <input type="text"
        name="email"
        placeholder='email'
        value={formdata.email}
        onChange={handleChange}/>
         {errors.email && <p>{errors.email}</p>}
        </div>
         <div>
        <input type="text"
        name="password"
        placeholder='password'
        value={formdata.password}
        onChange={handleChange}/>
         {errors.password && <p>{errors.password}</p>}
        </div>
        <button onClick={handleSubmit}>Register</button>
    </div>
    
  );
};

export default Formval;