rm -r docs
jsdoc2md --template README.hbs --files '**/*.js' | tee README.md
jsdoc -r . -R README.md
mv out docs
echo "Documentation generated, and put within /docs."