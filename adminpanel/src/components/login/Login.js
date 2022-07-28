import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const initialValues = {
        "email": "",
        "password": "",
    };
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
      const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8085/login', values).then(
            res=>{
                localStorage.setItem("currentUser",JSON.stringify(res.data.user))
                localStorage.setItem("currentToken",JSON.stringify(res.data.token))
                window.location.reload();
            } ).catch(err=>{
                if(err.response.data.status===404){
                    alert("User not found");

                }
                else if(err.response.data.status===401){
                    alert("Check you password and try again");

                }
            else{
                alert("Server error, try again");
                window.location.reload();


            }
        })
      }

    return (
        <div className='login'>
            <form>
                <div><h1>Log in</h1></div>
                <div>
                    <input onChange={handleInputChange} type='email' name='email' placeholder='Email' />
                </div>  
                <div>            
                    <input onChange={handleInputChange} type='password' name='password' placeholder='Password' />
                </div>
                <button onClick={(e)=>{handleSubmit(e)}}>SUBMIT</button>
            </form>
           <p> or <Link to='/signup'>signup</Link></p>
        </div>
    );
};

export default Login;