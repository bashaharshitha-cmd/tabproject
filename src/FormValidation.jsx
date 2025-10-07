import React, { useState } from 'react'
import './FormValidation.css'

function FormValidation() {
    const[formdata,setFormdata]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    });
    const[errors,setErrors]=useState({});
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const ValidationError=validateForm(formdata);
        setErrors(ValidationError);

        if(Object.keys(ValidationError).length===0){
          console.log("successfully submitted",formdata);
        };
        
    };

    const handleChange=(e)=>{
        const {name,value}= e.target;
       setFormdata( {...formdata,[name]:value})
       console.log(formdata);
    };
    const validateForm=(data)=>{
      let errors={};

      if(!data.firstname){
        errors.firstname="firstname is required";
      }
       if(!data.lastname){
        errors.lastname="lastname is required";
      }
       if(!data.email){
        errors.email="email is required";

      }else if(!ValidateEmail(data.email)){
        errors.email="invalid emailfont"
      }
       if(!data.password){
        errors.password="password is required";
      }
    return errors;
        
    };

    function ValidateEmail(email){
      const re=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      return re.test(email);

    }
  return (
    
        <div className="container">

            <div className="block">
                <h2>RegistrationForm</h2>
                <form onSubmit={handleSubmit}>
                <div className="hello">
                <input type='text' name="firstname"  
                    placeholder='firstname' 
                    onChange={handleChange}
                    value={formdata.firstname}/>
                    {errors.firstname && <span>{errors.firstname}</span>}
                </div>
                
                <div className="hello">
                 <input type='text'  
                 name="lastname"  
                   placeholder='lastname' 
                   onChange={handleChange}
                   value={formdata.lastname}/>
                    {errors.lastname && <span>{errors.lastname}</span>}
                 </div>
                 <div className="hello">
                  <input type='text'  
                    name="email"
                     placeholder='email' 
                     onChange={handleChange}
                     value={formdata.email}/>
                      {errors.email && <span>{errors.email}</span>}
                  </div>
                  <div className="hello">
                   <input type='text'
                    name="password" 
                    placeholder='password'
                     onChange={handleChange}
                     value={formdata.password}/>
                      {errors.password && <span>{errors.password}</span>}
                   </div>
                   <button className="hi" onClick={ handleSubmit}>Submit</button>
                   </form>
            </div>
        </div>


  );
};

export default FormValidation;