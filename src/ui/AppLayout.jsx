import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="h-screen  overflow-hidden  bg-stone-300  text-lg">
      {isLoading && <Loader />}
      <Header />
      <main className="h-5/6">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
