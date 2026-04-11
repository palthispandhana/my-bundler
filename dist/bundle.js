console.log("bundle running");
const fs = require('fs');
const createGraph = require('./graph');

function bundle(entry) {
  const graph = createGraph(entry);

  let modules = '';

  graph.forEach(mod => {
    modules += `${mod.id}:[function(require,module,exports){${mod.code}},${JSON.stringify(mod.mapping)}],`;
  });

  const result = `
    (function(modules){
      function require(id){
        const [fn, mapping] = modules[id];

        function localRequire(name){
          return require(mapping[name]);
        }

        const module = { exports: {} };
        fn(localRequire, module, module.exports);
        return module.exports;
      }

      require(0);
    })({${modules}})
  `;

  return result;
}

const result = bundle('./src/index.js');

// create dist if not exists
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

fs.writeFileSync('./dist/bundle.js', result);

console.log("✅ Bundle created successfully!");