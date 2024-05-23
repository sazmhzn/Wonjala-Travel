const Button = ({ type, value }) => {
  return (
    <button
      type="submit"
      className="w-full form-btn h-10 px-4 py-2 bg-blue-700 text-white hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
     {value}
    </button>
  );
};

export default Button;
