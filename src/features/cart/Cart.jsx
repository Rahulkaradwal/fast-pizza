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

      {cart.length > 0 ? (
        <>
          <div className="p-5">
            <h2 className="text-2xl font-semibold ">Your cart, {username}</h2>
            <ul className="h-68 my-8 divide-y divide-stone-200 border-y">
              {cart.map((item) => (
                <CartItem key={item.pizzaId} item={item} />
              ))}
            </ul>
          </div>
          <div>
            <LinkButton to="/order/new">Order Pizzas</LinkButton>
            <Button onClick={handleClick}>Clear Cart</Button>
          </div>
        </>
      ) : (
        <h1 className="m-10 p-10 text-center text-3xl">Your cart is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
