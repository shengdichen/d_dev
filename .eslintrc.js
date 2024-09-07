module.exports = {
  ignorePatterns: ['!.*'],

  // REF:
  //    https://eslint.org/docs/latest/use/configure/language-options#specifying-parser-options
  //    https://stackoverflow.com/questions/42706584/eslint-error-parsing-error-the-keyword-const-is-reserved
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
}
