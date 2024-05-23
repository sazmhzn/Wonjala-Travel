
const CustomeInput = ({placeholder, value, type, id}) => {
  return (
    <div>
      <>
      <label
          for={id}
          className="pointer-events-none mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out"
        >
          {value}
        </label>
        <input
          type={type}
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
          id={id}
          placeholder={placeholder}
        />
       
      </>
    </div>
  );
};

export default CustomeInput;
