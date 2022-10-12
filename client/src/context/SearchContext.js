import { createContext, useReducer } from "react";

const initialState = {
  characters: null,
  hasLoaded: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "characters-fetched":
      return {
        ...state,
        characters: action.characters,
        hasLoaded: true,
      };

    default:
      break;
  }
};

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Indicate that the characters available to search have been fetched.
  const charactersFetched = (data) => {
    dispatch({
      type: "characters-fetched",
      ...data,
    });
  };

  return (
    <SearchContext.Provider value={{ state, actions: { charactersFetched } }}>
      {children}
    </SearchContext.Provider>
  );
};
