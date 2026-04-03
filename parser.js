const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

let id = 0;

function parseFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const ast = parser.parse(content, {
    sourceType: 'module'
  });

  const dependencies = [];

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencies.push(node.source.value);
    }
  });

  const moduleId = id++;

  return {
    id: moduleId,
    filePath,
    dependencies
  };
}

module.exports = parseFile;