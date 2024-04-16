const Navbar = () => {
  return (
    <div className="flex justify-between items-center m-6">
      <img className="w-20" src="/logo.jpg" alt="" />
      <div className="flex gap-36 text-lg">
        <button>Emotions</button>
        <button>Manifesto</button>
        <button>Self-awareness test</button>
        <button>Work with Us</button>
      </div>
      <button className="rounded-3xl bg-black text-white w-40 h-16 text-lg">
        Download app
      </button>
    </div>
  );
};

export default Navbar;
