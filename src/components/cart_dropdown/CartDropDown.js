import "./CartDropDown.scss";

import { useContext } from "react";

// local imports
import Button from "../button/Button";
import CartItem from "../cart_item/CartItem";

import { CartContext } from "../../contexts/cart";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
