// Required packages.
import { createContext, useReducer } from "react";

// Required types.
import { Action, Actions, Context, State } from "../models/context/Affix";
import { FC } from "react";
import Props from "../models/components/Default";

const initialState: State = {
  affixes: [],
  error: "",
  hasLoaded: false,
};

const initialActions: Actions = {
  affixError: () => {},
  affixSuccess: () => {},
};

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

  const affixError = (data: State) => {
    dispatch({
      type: "affix-error",
      ...data,
    });
  };

  const affixSuccess = (data: State) => {
    dispatch({
      type: "affix-success",
      ...data,
    });
  };

  return (
    <AffixContext.Provider
      value={{ state, actions: { affixError, affixSuccess } }}
    >
      {children}
    </AffixContext.Provider>
  );
};
