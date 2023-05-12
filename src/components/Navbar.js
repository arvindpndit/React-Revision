const Navbar = () => {
  return (
    <div className="bg-green-50">
      <div className="flex justify-between items-center py-3 bg-green-50 w-9/12 mx-auto rounded-xl ">
        <h1 className="text-4xl font-bold text-green-600">FoodZilla</h1>
        <div className="flex gap-6 text-green-700">
          <div>Home</div>
          <div>Service</div>
          <div>Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
