import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <div
      className="-mt-5  flex h-10
    items-center justify-between  overflow-hidden bg-cyan-900 p-8 text-white"
    >
      {totalPrice && totalQuantity ? (
        <p className="space-x-5">
          <span>{totalQuantity} pizzas</span>
          <span>${totalPrice}</span>
        </p>
      ) : (
        ""
      )}
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
