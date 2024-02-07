function Button({ children, disabled, onClick }) {
  const classes =
    "m-5 rounded-md bg-cyan-900  p-2 text-base  text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer";

  if (onClick)
    return (
      <button disabled={disabled} className={classes} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export default Button;
