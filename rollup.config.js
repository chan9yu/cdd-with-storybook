import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
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
  plugins: [
    nodeResolve(),
    commonjs({ extensions: ['.js', '.ts'] }),
    typescript(),
    terser({
      format: { comments: false },
      compress: {
        unused: true,
        dead_code: true,
        pure_funcs: ['console.log'],
      },
    }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime', '@emotion/react', '@emotion/styled'],
};
