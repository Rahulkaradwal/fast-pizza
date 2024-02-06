import { useSelector } from "react-redux";

function Username() {
  const { username } = useSelector((store) => store.user);
  return <div>{username}</div>;
}

export default Username;
