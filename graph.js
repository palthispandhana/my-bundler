const path = require('path');
const parseFile = require('./parser');

function createGraph(entry) {
  const mainModule = parseFile(entry);

  const queue = [mainModule];

  for (const module of queue) {
    module.mapping = {};

    module.dependencies.forEach(relativePath => {
      const absolutePath = path.join(
        path.dirname(module.filePath),
        relativePath
      );

      const child = parseFile(absolutePath);

      module.mapping[relativePath] = child.id;

      queue.push(child);
    });
  }

  return queue;
}

module.exports = createGraph;