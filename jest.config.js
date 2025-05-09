export default {
  transform: {
    "^.+\\.mjs$": "babel-jest"
  },
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)", "**/?(*.)+(spec|test).mjs"]
};
