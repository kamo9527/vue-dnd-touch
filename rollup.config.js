// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'vue-dragging.js',
  dest: 'vue-dragging.es5.js',
  format: 'umd',
  moduleName: 'VueDragging',
  plugins: [
    babel({exclude: 'node_modules/**'}),
    eslint({exclude: 'node_modules/**'}),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
}