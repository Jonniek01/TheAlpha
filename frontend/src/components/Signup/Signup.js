import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const initialValues = {
        "name": "",
        "email": "",
        "phone": "",
        "location": "",
        "password": "",
    };
    const [values, setValues] = useState(initialValues);
    const navigate=useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
      const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8082/signup', values).then(
            res=>{
                alert("SIGNUP SUCCESFUL LOG IN TO CONTINUE")
                navigate('/login')            
            } ).catch(err=>{
            console.log(err)
        })
      }
    return (
        <div>
            <form>
                 <h1>Sign up</h1>

                <div>
                    <input onChange={handleInputChange}  type='text' name='name' placeholder='Name'/>
                </div>
                <div>
                    <input onChange={handleInputChange} type='email' name='email' placeholder='Email' />
                </div>                <div>
                    <input onChange={handleInputChange} type='text' name='phone' placeholder='Phone number' />
                </div>                <div>
                    <input onChange={handleInputChange} type='text' name='location' placeholder='Location' />
                </div>                <div>
                    <input onChange={handleInputChange} type='password' name='password' placeholder='Password' />
                </div>
                <button onClick={(e)=>{handleSubmit(e)}}>SUBMIT</button>
            </form>
        </div>

    );
};

export default Signup;