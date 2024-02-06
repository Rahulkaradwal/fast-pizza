import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between">
      <div className="flex">
        <p className="w-96">
          {quantity}&times; {name}
        </p>

        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <Button>Delete</Button>
    </li>
  );
}

export default CartItem;
