// module.exports = {
//     transform: {
//       '^.+\\.[tj]sx?$': 'babel-jest', // Transform JS and TS files using babel-jest
//     },
//     transformIgnorePatterns: [
//       '/node_modules/(?!(axios)/)', // Ignore node_modules except for axios
//     ],
//     moduleNameMapper: {
//       '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
//     },
//     testEnvironment: 'jsdom', // Set test environment to jsdom for React testing
//       moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node', 'jsx'],
    
//   };


  module.exports = {
    verbose: true,
    transform: {
      "^.+\\.[tj]sx?$": "babel-jest",
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    transformIgnorePatterns: [
      "/node_modules/"
    ],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "\\.(png|jpg|jpeg|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    testEnvironment: "jsdom",
  };
  
  