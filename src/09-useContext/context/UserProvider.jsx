import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "Bruno",
  email: "omarjm0910@icloud.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "Mundo", user: user }}>
      {children}
    </UserContext.Provider>
  );
};
