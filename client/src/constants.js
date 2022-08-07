export const DATA = {
  keystones: [
    {
      level: 2,
      scaling: 8,
    },
    {
      level: 5,
      scaling: 26,
    },
    {
      level: 10,
      scaling: 85,
    },
    {
      level: 15,
      scaling: 172,
    },
    {
      level: 20,
      scaling: 300,
    },
  ],
};

export const STRINGS = {
  app: "MythicDB",
  confirmPassword: "Confirm Password",
  login: "Sign In",
  password: "Password",
  searchCharacters: "Search characters",
  signUp: "Sign Up",
  username: "Username",
  viewMain: "View Main",
  cards: {
    affixes: {
      title: "Affixes",
      description:
        "View the affixes for this week and get information on what they do.",
    },
    intro: {
      title: "Welcome to the database!",
      description:
        "Not sure where to go? Keep scrolling to find links to various pages.\n\nYou can also type a name into the search bar to find a character!",
    },
    leaderboard: {
      title: "Leaderboard",
      description: "View the top players for each role.",
    },
    newPlayer: {
      title: "New Players",
      description:
        "New to Mythic+? Click here to be redirected to the information page.",
    },
  },
  newPlayer: {
    introduction: {
      title: "What is Mythic+?",
      description:
        "Mythic+ is a type of infinitely scaling content that allows dungeons to be challenging throughout an expansion.\n\nNo matter your skill level there will always be a key level that provides sufficient challenge for you.",
    },
    keyExplanation: {
      title: "How it works",
      description:
        "When you complete a mythic dungeon you will receive a keystone. A keystone can only be used at the corresponding dungeon and has a level associated to it.\n\nAs the keystone level increases enemies in the dungeon will have progressively more health and damage. Here's the breakdown;",
    },
  },
  paths: {
    affixes: "/affixes",
    leaderboard: "/leaderboard",
    login: "/login",
    newPlayer: "/introduction",
    signUp: "/signup",
  },
};
