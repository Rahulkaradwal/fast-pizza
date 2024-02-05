import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div
      className="-mt-5  flex h-10
    items-center justify-between  bg-cyan-900 p-8 text-white"
    >
      <p className="space-x-5">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
