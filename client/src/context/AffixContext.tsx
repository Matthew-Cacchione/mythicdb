// Required libraries.
import { createContext, useReducer } from "react";

// Required types and interfaces.
import { Action, Actions, Context, State } from "../models/context/Affix";
import { FC } from "react";
import Props from "../models/components/Default";

// Empty state and actions on initialization.
const initialState: State = {
  affixes: [],
  error: "",
  hasLoaded: false,
};

const initialActions: Actions = {
  affixError: () => {},
  affixSuccess: () => {},
};

// Reducer function to handle possible events.
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "affix-error":
      return {
        ...initialState,
        error: action.error,
      };

    case "affix-success":
      return {
        ...state,
        affixes: action.affixes,
        hasLoaded: true,
      };

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const AffixContext = createContext<Context>({
  state: initialState,
  actions: initialActions,
});

export const AffixProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Error occurred while fetching the affixes.
  const affixError = (data: State) => {
    dispatch({
      type: "affix-error",
      ...data,
    });
  };

  // Affixes successfully fetched.
  const affixSuccess = (data: State) => {
    dispatch({
      type: "affix-success",
      ...data,
    });
  };

  // Combining actions in a single variable.
  const actions: Actions = {
    affixError,
    affixSuccess,
  };

  return (
    <AffixContext.Provider value={{ state, actions }}>
      {children}
    </AffixContext.Provider>
  );
};
