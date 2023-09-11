import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
// import babel from 'rollup-plugin-babel';
import typescript from "rollup-plugin-typescript2";
// import preserveDirectives from "rollup-plugin-preserve-directives";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import swcPreserveDirectives from 'rollup-swc-preserve-directives';


import packageJson from "./package.json"  assert { type: "json" };
// const babelRuntimeVersion = pkg.devDependencies['@babel/runtime'].replace(/^[^0-9]*/, '');

const outputOptions = {
    // preserveModules: true,
    // Ensures that CJS default exports are imported properly (based on __esModule)
    // If needed, can switch to 'compat' which checks for .default prop on the default export instead
    // see https://rollupjs.org/configuration-options/#output-interop
}


export default {
    input: "./src/index.ts",
    output: [
        {
            dir: "build/cjs",
            format: "cjs",
            sourcemap: true,
            preserveModules: true,
            preserveModulesRoot: 'src',
            exports: 'named',
            interop: 'auto'
        },
        {
            dir: "build/esm",
            format: "esm",
            sourcemap: true,
            preserveModules: true,
            preserveModulesRoot: 'src',
            exports: 'named',
            interop: 'auto'
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs({ include: ['node_modules/**'] }),
        typescript(),
        swcPreserveDirectives()
    ]
};