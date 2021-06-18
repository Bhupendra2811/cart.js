import React from 'react';

const CartItem = (props) => {
        const {price,title,Qty}=props.product;
        const {product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct}=props;
        return (
            <div className="cart-item">
             <div className="left-block">
                 <img style={styles.image} src={product.img} />
             </div>
             <div className="right-block">
                <div style={{ fontSize: 25}}>{title}</div>
                <div style={{ color: '#777'}}>{price}</div>
                <div style={{ color:'#777'}}>{Qty}</div>
                <div className="cart-item-actions" >
                    <img alt="increase" className="action-icons"
                     src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                     onClick={() => props.onIncreaseQuantity(props.product)} />
                    <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                    onClick= {() => props.onDecreaseQuantity(props.product)} />
                     <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/3096/3096687.png" 
                     onClick = {() => onDeleteProduct(product.id)} />

                </div>
            </div>
            </div>
        );
}
const styles= {
    image :{
        height:110,
        width:110,
        borderRadius:4,
        background: '#ccc'
    }
}
export default CartItem;