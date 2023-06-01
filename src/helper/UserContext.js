import { createContext } from "react";

const UserContext = createContext({
  info: {
    name: "Arvind Pandit",
    email: "arvindpandit9808@gmail.com",
    linkedIn: "https://www.linkedin.com/in/arvindpndit/",
  },
});

export default UserContext;
