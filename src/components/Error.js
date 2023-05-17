import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>Opps !!! Something went wrong </div>
      <div>{status + " : " + statusText}</div>
    </div>
  );
};

export default Error;
