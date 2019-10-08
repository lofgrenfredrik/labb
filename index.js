var waPrettierConfig = require('@weahead/prettier-config');
var waEsLintConfig = require('@weahead/eslint-config-react');
var waHuskyConfig = require('@weahead/husky-config');
var waCommitLintConfig = require('@weahead/commitlint-config');
var waLintStagedConfig = require('@weahead/lint-staged-config');

module.exports = {
  prettierConfig: waPrettierConfig,
  esLintConfig: waEsLintConfig,
  huskyConfig: waHuskyConfig,
  commitLintConfig: waCommitLintConfig,
  lintStagedConfig: waLintStagedConfig,
};
