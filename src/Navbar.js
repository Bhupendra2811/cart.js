import React from 'react';

const Navbar = (props) => {
      return(
          <div style={styles.nav}>
              <div style={styles.cartIconContainer} >
                  <img style={styles.cartIcon }src="https://image.flaticon.com/icons/png/512/3144/3144484.png" alt="cart-icon" />
              <span style={styles.cartCount}>{props.count}</span>
              </div>
          </div>
      );
  }
const styles={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav: {
        height: 70,
        background: '#4367b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartCount:{

        height:32,
        marginRight:20,
    },
}
export default Navbar;