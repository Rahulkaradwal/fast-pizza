import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="border-1  m-2  gap-4 border p-12 text-gray-700">
      <img
        src={imageUrl}
        alt={name}
        className="h-68 w-full transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:rounded"
      />
      <div className="flex flex-col justify-evenly pt-4">
        <p className="font-bold">{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
