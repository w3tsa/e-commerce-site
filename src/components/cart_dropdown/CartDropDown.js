import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropDown.styles.js";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// local imports
import Button from "../button/Button";
import CartItem from "../cart_item/CartItem";

import { CartContext } from "../../contexts/cart";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const gotToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>You are cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={gotToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
