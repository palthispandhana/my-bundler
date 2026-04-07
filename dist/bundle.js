
    (function(modules) {
      function require(id) {
        const [fn, mapping] = modules[id];

        function localRequire(name) {
          return require(mapping[name]);
        }

        const module = { exports: {} };

        fn(localRequire, module, module.exports);

        return module.exports;
      }

      require(0);
    })({
      0: [
        function(require, module, exports) {
          "use strict";

var _utils = require("./utils.js");
console.log((0, _utils.add)(2, 3));
        },
        {"./utils.js":1}
      ],
    
      1: [
        function(require, module, exports) {
          "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
function add(a, b) {
  return a + b;
}
        },
        {}
      ],
    })
  