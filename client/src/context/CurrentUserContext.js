import { createContext, useEffect, useReducer } from "react";

const initialState = {
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "signed-in":
      const { token } = action;
      return { ...state, token };

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
  const signedIn = (token) => {
    dispatch({ type: "signed-in", token });
  };

  // User has been signed out.
  const signedOut = () => {
    dispatch({ type: "signed-out" });
  };

  // Check if a user is already signed in on initial render.
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      signedIn(token);
    }
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ state, actions: { signedIn, signedOut } }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
