function Button({ children, isSubmitting }) {
  return (
    <button
      disabled={isSubmitting}
      className="m-5 rounded-md bg-cyan-900  p-2 text-base  text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
