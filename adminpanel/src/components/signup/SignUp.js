import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Signup.css'


const Signup = () => {
    const initialValues = {
        "name": "",
        "email": "",
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
        axios.post('http://localhost:8085/signup', values).then(
            res=>{
                alert("SIGNUP SUCCESFUL LOG IN TO CONTINUE")
                navigate('/login')            
            } ).catch(err=>{
            console.log(err)
        })
      }
    return (
        <div className='sign'>
            
            <form>
                 <h1>Sign up</h1>

                <div>
                    <input onChange={handleInputChange}  type='text' name='name' placeholder='Name'/>
                </div>
                <div>
                    <input onChange={handleInputChange} type='email' name='email' placeholder='Email' />
                </div>           
                <div>
                    <input onChange={handleInputChange} type='password' name='password' placeholder='Password' />
                </div>
                <button onClick={(e)=>{handleSubmit(e)}}>SUBMIT</button>
            </form>
           <p>or <Link to='/login'>Login</Link></p> 
        </div>

    );
};

export default Signup;