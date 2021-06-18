import { render } from '@testing-library/react';
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
      this.state={
        products:[
            {
                price:999,
                title:'Phone',
                Qty:1,
                img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021660000",
                id:1
            } ,

            {
                price:999,
                title:'laptop',
                Qty:1,
                img: "https://rukminim1.flixcart.com/image/312/312/kmds4nk0/computer/t/0/9/na-thin-and-light-laptop-asus-original-imagfabezamstqhz.jpeg?q=70",
                id:2
            }  ,
            {
                price:999,
                title:'lcd',
                Qty:1,
                img:"",
                id:3
            }  
        ]
      }  
    }
    handleDeleteProduct = (id) =>{
        const {products } = this.state;
        const items =products.filter((item) => item.id !== id);
        this.setState({
            products:items
        })
    } 
    handleIncreaseQuantity=(product)=>{
        const {products} = this.state;
        const index =products.indexOf(product);
        products[index].Qty +=1;

        this.setState({
         products:products   
        })
    }
    handleDecreaseQuantity=(product)=>{
        const {products} = this.state;
        const index =products.indexOf(product);
       if  (products[index].Qty ==0){
            return;
        
       }
        products[index].Qty -=1;

        this.setState({
         products:products 
        })
    }
    getCartCount = () => {
      const {products}=this.state;
      let count =0;
      products.forEach((product) =>{
        count += product.Qty;
      })
      return count;
    }
    getCartTotal = () => {
      const {products}=this.state;

     let cartTotal =0;

      products.map((product)=> {
      cartTotal=cartTotal + product.Qty*product.price
      })
      return cartTotal;
    }
    render(){
  const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
      products={products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDeleteProduct={this.handleDeleteProduct}/>
       <div style={{ color:'#4367b2', padding: 10,fontSize:20,}}>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}
}
export default App;
