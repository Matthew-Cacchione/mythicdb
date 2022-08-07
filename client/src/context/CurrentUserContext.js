import { createContext, useReducer } from "react";

const initialState = {
  _id: null,
  username: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "signed-in":
      const { _id, username } = action;
      return { ...state, _id, username };

    case "signed-out":
      return { ...initialState };

    default:
      throw new Error("Unrecognized action:", action.type);
  }
};

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // User has been signed in.
  const signedIn = (data) => {
    dispatch({ type: "signed-in", ...data });
  };

  // User has been signed out.
  const signedOut = () => {
    dispatch({ type: "signed-out" });
  };

  return (
    <CurrentUserContext.Provider
      value={{ state, actions: { signedIn, signedOut } }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
