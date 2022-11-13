// Required libraries.
import { createContext, useReducer } from "react";

// Required types and interfaces.
import { Action, Context, State } from "../models/context/Character";
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

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "character-error":
      return {
        ...state,
        error: action.error,
        hasLoaded: false,
      };

    case "character-fetched":
      return {
        ...state,
        character: action.character,
        mythicPlus: action.mythicPlus,
        hasLoaded: true,
      };

    case "reset-character":
      return {
        ...initialState,
      };

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const CharacterContext = createContext<Context | null>(null);

export const CharacterProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Indicate that the character data has been fetched.
  const characterFetched = (data: State) => {
    dispatch({
      type: "character-fetched",
      ...data,
    });
  };

  // Indicate that an error has occurred.
  const characterError = (data: State) => {
    dispatch({
      type: "character-error",
      ...data,
    });
  };

  // Reset the character data.
  const resetCharacter = () => {
    dispatch({
      type: "reset-character",
      ...initialState,
    });
  };

  return (
    <CharacterContext.Provider
      value={{
        state,
        actions: { characterFetched, characterError, resetCharacter },
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
