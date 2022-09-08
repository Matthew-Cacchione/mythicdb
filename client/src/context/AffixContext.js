import { createContext, useReducer } from "react";

const initialState = {
  affixes: null,
  hasLoaded: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "affixes-fetched":
      return {
        ...state,
        affixes: action.affixes,
        hasLoaded: true,
      };

    default:
      throw new Error("Unrecognized action:", action.type);
  }
};

export const AffixContext = createContext(null);

export const AffixProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Indicate that the affix data has been fetched.
  const affixesFetched = (data) => {
    dispatch({
      type: "affixes-fetched",
      ...data,
    });
  };

  return (
    <AffixContext.Provider value={{ state, actions: { affixesFetched } }}>
      {children}
    </AffixContext.Provider>
  );
};
