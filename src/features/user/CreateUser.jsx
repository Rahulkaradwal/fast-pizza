import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 text-center text-xl ">
      <p className="p-8">👋 Welcome! Please start by telling us your name:</p>

      <input
        className="inputForm"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button>Place Order</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
