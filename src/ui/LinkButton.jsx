import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classes =
    "m-5 rounded-md   p-2 text-base  bg-cyan-900 text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer";

  if (to === "-1")
    return (
      <button className={classes} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}

export default LinkButton;
