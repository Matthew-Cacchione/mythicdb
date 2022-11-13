// Interfaces needed for exports.
interface Character {
  _id: string;
  faction: string;
  name: string;
  realm: string;
  region: string;
  thumbnail: string;
}

// Export interfaces needed for context.
export interface State {
  characters: Array<Character>;
  hasLoaded: boolean;
}

export interface Action extends State {
  type: string;
}

export interface Context {
  state: State;
  actions: Object;
}
