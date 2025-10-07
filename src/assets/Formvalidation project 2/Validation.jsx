import React from 'react'

export default function Validation(formdata) {
    const errors={}
    const email_pattren=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const password_pattren=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if(formdata.username===""){
        errors.username="username not valid"
    }

     if(formdata.email===""){
    errors.email="please enter email"
    }
    else
    if(!email_pattren.test(formdata.email)){
        errors.email="email not correct"
    }

    if(formdata.username===""){
        errors.password="please enter email"
    }else   if(!password_pattren.test (formdata.password)){
        errors.password="passeord not correct"
    }

return errors;

 
};

