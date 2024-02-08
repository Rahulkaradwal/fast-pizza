import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { username } = useSelector((store) => store.user);
  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-8">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <div className="p-5">
        <h2 className="text-2xl font-semibold ">Your cart, {username}</h2>
        <ul className="dive-stone-200 h-68 my-8 divide-y border-y">
          {cart.map((item) => (
            <CartItem key={item.pizzaId} item={item} />
          ))}
        </ul>
      </div>
      <div>
        <LinkButton to="/order/new">Order Pizzas</LinkButton>
        <Button onClick={handleClick}>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
