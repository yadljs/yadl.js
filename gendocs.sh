echo "Deleting old documentation..."
rm -r docs
echo "Generating README..."
jsdoc2md --template README.hbs --files './**/*.js' > README.md
echo "Generating documentation..."
jsdoc -r . -R DOCS.md
echo "Moving to /docs..."
mv out docs
echo "Documentation generated, and put within /docs."