import typescript from '@rollup/plugin-typescript';

import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.exports['.'].import,
      format: 'esm',
      sourcemap: true,
      exports: 'auto',
    },
    {
      file: pkg.exports['.'].require,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [typescript()],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
};
