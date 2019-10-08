#!/bin/sh

if [ ! -f "${INIT_CWD}/.prettierrc.js" ]; then
  echo "module.exports = require('@lofgrenfredrik/labb')['prettierConfig'];" > "${INIT_CWD}/.prettierrc.js"
fi

if [ ! -f "${INIT_CWD}/.commitlintrc.js" ]; then
  echo "module.exports = require('@lofgrenfredrik/labb')['commitLintConfig'];" > "${INIT_CWD}/.commitlintrc.js"
fi

if [ ! -f "${INIT_CWD}/.eslintrc.js" ]; then
  echo "module.exports = require('@lofgrenfredrik/labb')['esLintConfig'];" > "${INIT_CWD}/.eslintrc.js"
fi

if [ ! -f "${INIT_CWD}/.huskyrc.js" ]; then
  echo "module.exports = require('@lofgrenfredrik/labb')['huskyConfig'];" > "${INIT_CWD}/.huskyrc.js"
fi

if [ ! -f "${INIT_CWD}/.lint-staged.config.js" ]; then
  echo "module.exports = require('@lofgrenfredrik/labb')['lintStagedConfig'];" > "${INIT_CWD}/.lint-staged.config.js"
fi
