import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.js',
    dest: 'dist/d3-force-bounce.js',
    format: 'umd',
    moduleName: 'd3',
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true
        }),
        babel({
            presets: [
                ["es2015", { "modules": false }]
            ],
            plugins: ["external-helpers"],
            babelrc: false
        })
    ]
};