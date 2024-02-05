import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div>
      <h1 className="pt-12 text-center text-4xl font-bold">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
