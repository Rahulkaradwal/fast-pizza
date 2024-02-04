import { Link } from "react-router-dom";
import SearchOrder from "../features/orders/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Fast Pizza Co.</Link>
      <SearchOrder />
    </div>
  );
}

export default Header;
