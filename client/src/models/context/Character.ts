interface Character {
  class: string;
  faction: string;
  guild: string;
  name: string;
  race: string;
  realm: string;
  region: string;
  spec: string;
  thumbnail: string;
}

interface Run {
  dungeon: string;
  level: number;
}

interface MythicPlus {
  bestRuns: Array<Run>;
  color: string;
  score: number;
}

// Export types needed for context.
export interface State {
  character: Character;
  mythicPlus: MythicPlus;
  error: string;
  hasLoaded: boolean;
}

export interface Action extends State {
  type: string;
}

export interface Actions {
  characterError: Function;
  characterSuccess: Function;
  characterReset: Function;
}

export interface Context {
  state: State;
  actions: Actions;
}
