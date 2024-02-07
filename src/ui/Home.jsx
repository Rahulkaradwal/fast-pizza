import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import LinkButton from "./LinkButton";

function Home() {
  const { username } = useSelector((store) => store.user);
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="pt-12 text-center text-4xl font-bold">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <div className="mt-8">
        {username === "" ? (
          <CreateUser />
        ) : (
          <LinkButton to="/menu">Continue Ordering, {username}</LinkButton>
        )}
      </div>
    </div>
  );
}

export default Home;
