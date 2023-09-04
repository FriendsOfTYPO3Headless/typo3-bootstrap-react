import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from 'rollup-plugin-babel';
import typescript from "rollup-plugin-typescript2";
import preserveDirectives from "rollup-plugin-preserve-directives";

import pkg from "./package.json";//  assert { type: "json" };
const babelRuntimeVersion = pkg.devDependencies['@babel/runtime'].replace(/^[^0-9]*/, '');

const outputOptions = {
    sourcemap: true,
    exports: 'named',
    preserveModules: true,
    // Ensures that CJS default exports are imported properly (based on __esModule)
    // If needed, can switch to 'compat' which checks for .default prop on the default export instead
    // see https://rollupjs.org/configuration-options/#output-interop
    interop: 'auto',

}


export default {
    input: "./src/index.ts",
    output: [
        {
            dir: 'dist/cjs',
            format: 'cjs', // Erzeugt sowohl ES-Module als auch CommonJS-Module
            ...outputOptions

        },
        {
            dir: 'dist/esm',
            format: 'esm', // Erzeugt sowohl ES-Module als auch CommonJS-Module
            ...outputOptions

        },
    ],
    plugins: [
        resolve(),
        commonjs({ include: ['node_modules/**'] }),
        babel({
            babelHelpers: 'runtime',
            exclude: /node_modules/,
            plugins: [['@babel/plugin-transform-runtime', { version: babelRuntimeVersion }]],
            presets: [
                ['@babel/preset-env', { targets: 'defaults' }],
                ['@babel/preset-react', { runtime: 'automatic' }],
            ],
        }),
        typescript(),
        preserveDirectives()
    ]
};