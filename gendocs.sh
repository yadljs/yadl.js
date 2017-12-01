echo "Deleting old documentation..."
rm -r docs
echo "Generating README..."
jsdoc2md -c ./jsdoc2md.json --template README.hbs --files './**/*.js' > README.md
echo "Generating documentation..."
jsdoc -r . -R DOCS.md -c ./jsdoc.json -v
mv out docs
echo "Documentation generated, and put within /docs."