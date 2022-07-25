   import React from 'react'


import React from 'react';

const actions = () => {

    state = {
        products: []
      }
 const  getProduct = async (e) => {
        const productName = e.target.elements.productName.value;
        e.preventDefault();
        const api_call = await fetch(`https://my-json-server.typicode.com/felista47/json-server/products`);
        
        const data = await api_call.json();
        this.setState({ recipes: data.Products });
        console.log(this.state.Products);
      }
      componentDidMount = () => {
        const json = localStorage.getItem("products");
        const products = JSON.parse(json);
        this.setState({ products });
      }
      componentDidUpdate = () => {
        const products = JSON.stringify(this.state.products);
        localStorage.setItem("products", products);
      }
    return (
        <div>
            Component!
        </div>
    );
};

export default actions;


