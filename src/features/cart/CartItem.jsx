import { useDispatch, useSelector } from "react-redux";

import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentQuantity, removeFromCart } from "./cartSlice";
import UpdateQuantity from "./updateQuantity";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;

  const handleClick = (id) => {
    dispatch(removeFromCart(id));
  };

  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));
  return (
    <li className="flex items-center justify-between">
      <div className="flex">
        <p className="w-96">
          {quantity}&times; {name}
        </p>

        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <UpdateQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
      <Button onClick={() => handleClick(pizzaId)}>Remove</Button>
    </li>
  );
}

export default CartItem;
