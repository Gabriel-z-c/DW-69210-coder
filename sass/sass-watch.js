// sass/sass-watch.js

const sass = require('sass');
const fs = require('fs');
const path = require('path');

// Ruta de entrada y salida
const inputFile = path.join(__dirname, 'estilos.scss');
const outputFile = path.join(__dirname, '../css/estilos.css');

function compileSass() {
  sass.render({
    file: inputFile,
    outFile: outputFile,
    sourceMap: true,
  }, function(error, result) {
    if (!error) {
      fs.writeFileSync(outputFile, result.css);
      console.log('✅ Sass compilado con éxito');
    } else {
      console.error('❌ Error al compilar Sass:', error.message);
    }
  });
}

// Compila al inicio
compileSass();

// Observa cambios en el archivo SCSS
fs.watchFile(inputFile, (curr, prev) => {
  console.log('🌀 Cambio detectado en estilos.scss, recompilando...');
  compileSass();
});

