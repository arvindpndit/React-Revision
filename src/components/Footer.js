import { useContext } from "react";
import UserContext from "../helper/userContext";

const Footer = () => {
  const { info } = useContext(UserContext);
  return (
    <div className="flex flex-col justify-center items-center bg-slate-600 py-3 text-white">
      <div>This is React-Revision by {info.name}</div>
      <div>{info.linkedIn}</div>
    </div>
  );
};

export default Footer;
