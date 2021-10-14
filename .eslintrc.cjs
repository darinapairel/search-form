module.exports = {
  "extends": ["airbnb-base", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier", "react"],
  "env" : {
    "browser" : true,
    "node" : true,
    "es6" : true
  },
  "rules": {
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }],
    "react/prop-types": 0,
    "linebreak-style": 0,
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-shadow": "off",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off", 
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/extensions": "off"
  },
  
  "parserOptions": {
    "ecmaVersion": 11,
    "ecmaFeatures": {
      "modules": true,     
      "spread" : true,
      "restParams" : true,
      "jsx": true
    },
    "sourceType": "module"
  },
};