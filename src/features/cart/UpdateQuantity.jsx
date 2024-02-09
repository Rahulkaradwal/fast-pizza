import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";

function UpdateQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(increaseQuantity(pizzaId))}>+</Button>
      <span>{currentQuantity}</span>
      <Button onClick={() => dispatch(decreaseQuantity(pizzaId))}>-</Button>
    </div>
  );
}

export default UpdateQuantity;
