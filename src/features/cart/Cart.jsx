import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const { username } = useSelector((store) => store.user);

  return (
    <div className="m-8">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <div className="p-5">
        <h2 className="text-2xl font-semibold ">Your cart, {username}</h2>
        <ul className="dive-stone-200 h-68 my-8 divide-y border-y">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <div>
        <LinkButton to="/order/new">Order Pizzas</LinkButton>
        <Button>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
