import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";

function UpdateQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(increaseQuantity(pizzaId))}>
        Add +1
      </Button>
      <Button onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        Remove -1
      </Button>
    </div>
  );
}

export default UpdateQuantity;
