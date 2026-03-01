const fs = require('fs');
const path = require('path');

const src = 'node_modules/three/examples/jsm/libs/draco/gltf';
const output = 'public/draco';

// Ensure output directory exists
if (!fs.existsSync(output)) {
  fs.mkdirSync(output, { recursive: true });
}

// Copy draco decoder from three.js into the public directory
fs.copyFile(`${src}/draco_decoder.wasm`, `${output}/draco_decoder.wasm`, err => {
  if (err) return console.error(err);
});

fs.copyFile(`${src}/draco_wasm_wrapper.js`, `${output}/draco_wasm_wrapper.js`, err => {
  if (err) return console.error(err);
});
