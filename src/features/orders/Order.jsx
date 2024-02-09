// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../utils/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  console.log(cart);

  return (
    <div className=" m-4   ">
      <div className="mb-4 flex justify-between gap-x-4">
        <h2 className=" text-2xl font-bold">Order #{id} status</h2>

        <div className="flex  ">
          {priority && (
            <span className="mr-4 rounded-md bg-red-600 px-2 py-1 font-semibold uppercase text-white">
              Priority
            </span>
          )}
          <span className="flex rounded-md bg-green-600 px-2 py-1 font-semibold uppercase text-white">
            {status} order
          </span>
        </div>
      </div>

      <div className=" mb-4 flex justify-between rounded-md bg-zinc-400 p-6 text-xl">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="dive-stone-200 h-68 divide-y  border border-y">
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-16 flex justify-between rounded-md bg-zinc-400 p-6 text-xl">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
