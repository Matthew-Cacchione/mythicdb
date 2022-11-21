// Required libraries.
import { createContext, useReducer } from "react";

// Required types and interfaces.
import { Action, Actions, Context, State } from "../models/context/Search";
import { FC } from "react";
import Props from "../models/components/Default";

const initialState: State = {
  characters: [],
  hasLoaded: false,
};

const initialActions: Actions = {
  searchSuccess: () => {},
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

export const SearchContext = createContext<Context>({
  state: initialState,
  actions: initialActions,
});

export const SearchProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Indicate that the characters available to search have been fetched.
  const searchSuccess = (data: State) => {
    dispatch({
      type: "search-success",
      ...data,
    });
  };

  return (
    <SearchContext.Provider value={{ state, actions: { searchSuccess } }}>
      {children}
    </SearchContext.Provider>
  );
};
