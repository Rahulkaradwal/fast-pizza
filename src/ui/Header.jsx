import { Link } from "react-router-dom";
import SearchOrder from "../features/orders/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="flex  items-center justify-between bg-cyan-900 p-8 text-white">
      <Link to="/">Fast Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;
