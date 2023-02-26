module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
}

/*
module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'spaced-comment': 'off',
    'no-console': 'warn',
    'consistent-return': 'off',
    'func-names': 'off',
    'object-shorthand': 'off',
    'no-process-exit': 'off',
    'no-param-reassign': 'off',
    'no-return-await': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': ['error', {object: true, array: false}],
    'no-unused-vars': ['warn', {argsIgnorePattern: 'req|res|next|val'}],
    'no-empty': 'off',
    'comma-dangle': 'off',
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module',
      allowImportExportEverywhere: true,
    },
  },
};
*/
