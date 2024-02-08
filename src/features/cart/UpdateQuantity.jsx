import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseQuantity,
  getTotalQuantity,
  increaseQuantity,
} from "./cartSlice";

function UpdateQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <div>
      <Button onClick={() => dispatch(increaseQuantity(pizzaId))}>+</Button>
      <span>{totalQuantity}</span>
      <Button onClick={() => dispatch(decreaseQuantity(pizzaId))}>-</Button>
    </div>
  );
}

export default UpdateQuantity;
