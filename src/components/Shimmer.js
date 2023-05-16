const Shimmer = () => {
  return (
    <div className="h-full w-9/12 mx-auto">
      <div className=" mt-7 mb-10 flex flex-wrap justify-between gap-5 w-full mx-auto">
        {Array(9)
          .fill("")
          .map((e, index) => (
            <div key={index} className="w-72 h-72 border bg-green-100"></div>
          ))}
      </div>
    </div>
  );
};
export default Shimmer;
