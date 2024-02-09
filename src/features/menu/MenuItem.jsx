import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  addToCart,
  getCurrentQuantity,
  removeFromCart,
} from "../cart/cartSlice";
import UpdateQuantity from "../cart/UpdateQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const handleClick = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    // console.log(newItem);

    dispatch(addToCart(newItem));
  };
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const isInCart = useSelector((state) =>
    state.cart.cart.some((item) => item.pizzaId === id),
  );
  const currentQuantity = useSelector(getCurrentQuantity(id));

  return (
    <li className="border-1 m-2  flex flex-col  gap-2 border p-6 text-lg text-gray-700">
      <img
        src={imageUrl}
        alt={name}
        className="w-46 h-60 rounded transition-all duration-300 hover:scale-105 hover:cursor-pointer"
      />
      <div className="flex  flex-col justify-evenly  pt-4">
        <div className="h-36  ">
          <p className="font-bold">{name}</p>
          <p>{ingredients.join(", ")}</p>
          <div>
            {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          </div>
        </div>

        {soldOut ? (
          <Button disabled={soldOut}>Sold Out</Button>
        ) : (
          <>
            {!isInCart ? (
              <Button onClick={handleClick}>Add to Cart</Button>
            ) : (
              <div className="flex">
                <Button onClick={() => handleRemove(id)}>Remove</Button>
                <UpdateQuantity
                  pizzaId={id}
                  currentQuantity={currentQuantity}
                />
              </div>
            )}
          </>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
