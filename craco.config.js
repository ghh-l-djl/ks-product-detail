const CracoLessPlugin = require('craco-less');
const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
module.exports = {
    webpack: {
        alias: {
            '@': pathResolve('src'),
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin
        },
    ],
};