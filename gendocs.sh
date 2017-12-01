echo "Deleting old documentation..."
rm -r docs
echo "Generating documentation..."
jsdoc -r . -R README.md -c ./jsdoc.json
mv out docs
cp logo.png docs
echo "Documentation generated, and put within /docs."