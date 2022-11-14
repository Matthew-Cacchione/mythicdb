// Interface needed for exports.
interface Affix {
  id: number;
  name: string;
  description: string;
  icon: string;
  wowhead_url: string;
}

// Export interfaces needed for context.
export interface State {
  affixes: Array<Affix>;
  error: string;
  hasLoaded: boolean;
}

export interface Action extends State {
  type: string;
}

export interface Actions {
  affixError: Function;
  affixSuccess: Function;
}

export interface Context {
  state: State;
  actions: Actions;
}
