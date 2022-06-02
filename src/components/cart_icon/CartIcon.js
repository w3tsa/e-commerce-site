import "./CartIcon.scss";

import { useContext } from "react";

// local imports
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
