const createGraph = require('./graph');

const graph = createGraph('./src/index.js');

graph.forEach(module => {
  console.log("ID:", module.id);
  console.log("Transformed Code:\n", module.code);
  console.log("--------------------");
});