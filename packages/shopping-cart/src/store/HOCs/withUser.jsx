import { useContext } from "react";
import { UserContext } from "../context";

export const withUser = (Component) => {
  const UserConsumer = (props) => {
    const context = useContext(UserContext);
    return <Component {...props} {...context} />;
  };
  return UserConsumer;
};
