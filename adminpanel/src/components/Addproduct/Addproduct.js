import axios from 'axios';
import React, { useState } from 'react';
import './Addproduct.css'

const AddProduct = ({setOver}) => {
  const token = JSON.parse(localStorage.getItem("currentToken"));

    const initialValues = {
      "name":"",
      "price":0,
      "image":"",
      "description":"",
      "category":""
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
        axios.post('http://localhost:8081/post', values,  {headers: {
          "Authorization":token,
          "Content-Type": "application/json"
        }}).then(
            res=>{
              console.log(res)
              alert("product added succesfully");
                // window.location.reload();
            } ).catch(err=>{
              console.log(err)
                if(err.response.data.status===403){
                  localStorage.clear();
                  alert("Please log in again to continue")
                  window.location.reload();
        
                }
            //     else if(err.response.data.status===401){
            //         alert("Check you password and try again");

            //     }
            // else{
            //     alert("Server error, try again");
            //     window.location.reload();


            // }
        })
      }

    return (
        <div className='add'>
              <div className='close_div'>
              <button  onClick={()=>{setOver("close_none")}} className='close_add'>x</button>

              </div>

            <form>
                <div><h1>Add Product</h1></div>
                <div>
                    <input onChange={handleInputChange} type='text' name='name' placeholder='Name' />
                </div>  
                <div>
                    <input onChange={handleInputChange} type='number' name='price' placeholder='price' />
                </div>  
                <div>
                    <input onChange={handleInputChange} type='text' name='image' placeholder='image' />
                </div>  

                <div>
                    <input onChange={handleInputChange} type='text' name='description' placeholder='Description' />
                </div>  
                <div>
                    <input onChange={handleInputChange} type='text' name='category' placeholder='Category' />
                </div>  

                <button onClick={(e)=>{handleSubmit(e)}}>SUBMIT</button>
            </form>
        </div>
    );
};

export default AddProduct;