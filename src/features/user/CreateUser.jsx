import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 text-center text-xl ">
      <p className="p-8">👋 Welcome! Please start by telling us your name:</p>

      <input
        className="input"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <button className="m-5 rounded-md bg-cyan-900  p-2 text-base  text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
