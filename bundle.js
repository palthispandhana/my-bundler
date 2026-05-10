const fs = require('fs');

const code = `
(function() {

  const result = 2 + 3;

  console.log(result);

  document.body.innerHTML += '<h2>Result: ' + result + '</h2>';

})();
`;

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

fs.writeFileSync('./dist/bundle.js', code);

console.log('✅ Bundle created!');