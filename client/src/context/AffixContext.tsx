// Required libraries.
import { createContext, useReducer } from "react";

// Required types and interfaces.
import { Action, Context, State } from "../models/context/Affix";
import { FC } from "react";
import Props from "../models/components/Default";

const initialState: State = {
  affixes: [],
  hasLoaded: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "affixes-fetched":
      return {
        ...state,
        affixes: action.affixes,
        hasLoaded: true,
      };

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const AffixContext = createContext<Context | null>(null);

export const AffixProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Indicate that the affix data has been fetched.
  const affixesFetched = (data: State) => {
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
