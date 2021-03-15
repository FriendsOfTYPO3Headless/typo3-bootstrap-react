import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

import scss from 'rollup-plugin-scss';

import packageJson from "./package.json";

export default {
    input: "./src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        scss(), // will output compiled styles to output.css
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript()
    ]
};