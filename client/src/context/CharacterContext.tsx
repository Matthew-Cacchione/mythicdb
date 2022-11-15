// Required libraries.
import { createContext, useReducer } from "react";

// Required types and interfaces.
import { Action, Actions, Context, State } from "../models/context/Character";
import { FC } from "react";
import Props from "../models/components/Default";

const initialState: State = {
  character: {
    class: "",
    faction: "",
    guild: "",
    name: "",
    race: "",
    realm: "",
    region: "",
    spec: "",
    thumbnail: "",
  },
  mythicPlus: {
    bestRuns: [],
    color: "",
    score: 0,
  },
  error: "",
  hasLoaded: false,
};

const initialActions: Actions = {
  characterError: () => {},
  characterSuccess: () => {},
  characterReset: () => {},
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "character-error":
      return {
        ...state,
        error: action.error,
        hasLoaded: false,
      };

    case "character-success":
      return {
        ...state,
        character: action.character,
        mythicPlus: action.mythicPlus,
        hasLoaded: true,
      };

    case "character-reset":
      return {
        ...initialState,
      };

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const CharacterContext = createContext<Context>({
  state: initialState,
  actions: initialActions,
});

export const CharacterProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const characterError = (data: State) => {
    dispatch({
      type: "character-error",
      ...data,
    });
  };

  const characterSuccess = (data: State) => {
    dispatch({
      type: "character-success",
      ...data,
    });
  };

  const characterReset = () => {
    dispatch({
      type: "character-reset",
      ...initialState,
    });
  };

  return (
    <CharacterContext.Provider
      value={{
        state,
        actions: { characterError, characterSuccess, characterReset },
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
