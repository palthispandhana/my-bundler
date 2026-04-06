const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

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

  // 🔥 Transform code using Babel
  const { code } = babel.transformFromAstSync(ast, content, {
    presets: ['@babel/preset-env']
  });

  const moduleId = id++;

  return {
    id: moduleId,
    filePath,
    dependencies,
    code   // 👈 important
  };
}

module.exports = parseFile;