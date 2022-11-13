interface Affix {
  id: number;
  name: string;
  description: string;
  icon: string;
  wowhead_url: string;
}

export interface Action {
  type: string;
  affixes: Array<Affix>;
}

export interface Context {
  state: State;
  actions: Object;
}

export interface State {
  affixes: Array<Affix>;
  hasLoaded: boolean;
}
