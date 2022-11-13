// Required libraries.
import { createContext, useReducer } from "react";

// Required types and interfaces.
import { Action, Context, State } from "../models/context/Search";
import { FC } from "react";
import Props from "../models/components/Default";

const initialState: State = {
  characters: [],
  hasLoaded: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "characters-fetched":
      return {
        ...state,
        characters: action.characters,
        hasLoaded: true,
      };

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const SearchContext = createContext<Context | null>(null);

export const SearchProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Indicate that the characters available to search have been fetched.
  const charactersFetched = (data: State) => {
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
