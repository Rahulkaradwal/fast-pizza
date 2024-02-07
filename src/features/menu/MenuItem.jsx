import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
        <Button>Add to Cart</Button>
      </div>
    </li>
  );
}

export default MenuItem;
